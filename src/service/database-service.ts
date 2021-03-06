import Dexie from 'dexie';
import ServiceAPI from './service-api';
import { Result } from '../model/result';
import { Subject } from '../model/subject';
import { Skill } from '../model/skill';
import { Exercice } from '../model/exercice';



class DatabaseService {

    private static DB_NAME: string = 'galileo';
    private api: ServiceAPI;
    private db: Dexie;

    constructor() {
        this.api = new ServiceAPI();
        this.db = new Dexie(DatabaseService.DB_NAME);
        this.db.version(1).stores({
            subjects: 'id',
            skills: 'id, subject_id',
            exercices: 'id',
            questions: 'id',
            results: 'id',
        });
    }

    public isCreated(): Promise<boolean> {
        return Dexie.exists(DatabaseService.DB_NAME);
    }

    public addResult(result: Result): Promise<any> {
        return this.db.table("results").add(result);
    }

    public getSubjects(): Promise<Subject[]> {
        return this.db.table("subjects").toArray();
    }

    public getRecommandedSkills(skill: Skill): Promise<Skill[]> {
        return this.db.table("skills")
            .where({ subject_id: skill.subject_id })
            .filter(s => s.id !== skill.id)
            .limit(3)
            .sortBy('difficulty');
    }

    public getSkill(id: number): Promise<Skill> {
        return this.db.table("skills").get(id);
    }

    public getExercice(id: number): Promise<Exercice> {
        return this.db.table("exercices").get(id);
    }


    public initialize(): Promise<boolean> {
        return new Promise((resolve) => {
            this.api.getSubject().then((subjects) => {
                subjects.forEach(s => {
                    this.db.table("skills").bulkPut(s.skills)
                    s.skills.forEach(skill => {
                        this.db.table("exercices").bulkPut(skill.exercices);
                    })
                })
                this.db.table("subjects").bulkPut(subjects);
                resolve(true);
            });
        });
    }

}

export default DatabaseService;