import { Exercice } from "./exercice";

export class Skill {
    id: string;
    name: string;
    description: string;
    premium?: boolean;
    exercices: Exercice[];
    image?: string;
    order?: string;
    difficulty?: number;
    video?: string;

    constructor() {
        this.name = "";
        this.id = "";
        this.description = "";
        this.exercices = [];
    }
}