import { Subject } from "./subject";

export class Exercice {
    id!: string;
    skill_id!: string;
    name!: string;
    description!: string;
    question: string;
    tip!: string;
    answer!: string;

    constructor() {
        this.question = "";
    }
}