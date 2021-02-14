import { Subject } from "./subject";

export class Exercice {
    id!: string;
    skill_id!: string;
    name!: string;
    description!: string;
    enonce: string;
    questions: string[];
    tip!: string;
    answer!: string;

    constructor() {
        this.enonce = "";
        this.questions = [];
    }
}