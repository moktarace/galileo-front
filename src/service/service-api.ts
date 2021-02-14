import { Skill } from "../model/skill";
import { Exercice } from "../model/exercice";
import { Subject } from "../model/subject";

const URL = 'https://cours-galilee.com/wp-json/wp/v2/comptence?per_page=100&orderby=title&order=asc';

class ServiceAPI {

    public getSubject(): Promise<Subject[]> {
        return new Promise((resolve, reject) => {
            fetch(URL)
                .then(response => response.json())
                .then(json => {
                    var regexp = new RegExp('<li>');
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
                        let exercices: Exercice[] = [];
                        (value.exercices || []).map((exo: any) =>
                            exercices.push({
                                id: exo.id,
                                skill_id: value.id,
                                name: exo.post_title,
                                description: "",
                                enonce: exo.enonce,
                                questions: exo.enonce.split(regexp) || 1,
                                answer: exo.correction,
                                tip: "demerde-toi"
                            })
                        );
                        let skill: Skill = {
                            id: value.id,
                            subject_id: value.chapitre[0].id,
                            name: value.nom,
                            description: value.content.rendered,
                            premium: false,
                            difficulty: +value.difficulte,
                            video: value.video,
                            image: value.thumbnail.guid,
                            order: +value.ordering,
                            exercices: exercices,
                        };
                        subjects.get(value.chapitre[0].id)?.skills.push(skill);
                        return skill;
                    });
                    resolve(Array.from(subjects.values()));
                });
        });
    }
}

export default ServiceAPI;