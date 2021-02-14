import { Skill } from "../model/skill";
import { Exercice } from "../model/exercice";
import { Level } from "../model/level";
import { Subject } from "../model/subject";
import { Result } from "../model/result";

const URL = 'https://cours-galilee.com/wp-json/wp/v2/';

class ServiceAPI {

    public saveResult(result: Result) {
        localStorage.setItem(result.id, JSON.stringify(result));
    }


    public getLevels(): Promise<Level[]> {
        return new Promise((resolve, reject) => {
            fetch(URL + 'niveau')
                .then(response => response.json())
                .then(json => {
                    var result: Level[] = [];
                    json.map((value: any) =>
                        result.push({
                            id: value.id,
                            name: value.nom,
                            description: value.content.rendered,
                            subjects: []
                        })
                    );
                    resolve(result);
                });
        });
    }



    public getExercices(): Promise<Exercice[]> {
        return new Promise((resolve, reject) => {
            fetch(URL + 'exercice')
                .then(response => response.json())
                .then(json => {
                    var result: Exercice[] = [];
                    json.map((value: any) =>
                        result.push({
                            id: value.id,
                            name: value.nom,
                            description: value.content.rendered,
                            question: value.enonce,
                            answer: value.correction,
                            tip: "demerde-toi"
                        })
                    );
                    resolve(result);
                });
        });
    }

    public getSubject(): Promise<Subject[]> {
        return new Promise((resolve, reject) => {
            fetch(URL + 'comptence?per_page=100&orderby=title&order=asc')
                .then(response => response.json())
                .then(json => {
                    var subjects: Map<number, Subject> = new Map();
                    json.map((value: any) => {
                        if (!subjects.has(value.chapitre[0].ID)) {
                            subjects.set(value.chapitre[0].ID, {
                                id: value.chapitre[0].ID,
                                name: value.chapitre[0].post_title,
                                description: "",
                                skills: []
                            });
                        }
                        let skill: Skill = {
                            id: value.id,
                            name: value.nom,
                            description: value.content.rendered,
                            premium: false,
                            difficulty: value.difficulte,
                            video: value.video,
                            image: value.thumbnail.guid,
                            order: value.ordering,
                            exercices: [],
                        };
                        subjects.get(value.chapitre[0].id)?.skills.push(skill);
                        return skill;
                    });
                    resolve(Array.from(subjects.values()));
                });
        });
    }

    public getSkill(id: string): Promise<Skill> {
        return new Promise((resolve, reject) => {
            fetch(URL + 'comptence/' + id)
                .then(response => response.json())
                .then(json => {
                    let exercices: Exercice[] = [];
                    (json.exercices || []).map((exo: any) =>
                        exercices.push({
                            id: exo.id,
                            name: exo.post_title,
                            description: "",
                            question: exo.enonce,
                            answer: exo.correction,
                            tip: "demerde-toi"
                        })
                    );
                    resolve({
                        id: json.id,
                        name: json.nom,
                        description: json.content.rendered,
                        premium: false,
                        difficulty: json.difficulte,
                        video: json.video,
                        order: json.ordering,
                        image: json.thumbnail.guid,
                        exercices: exercices,
                    });
                });
        });
    }
}

export default ServiceAPI;