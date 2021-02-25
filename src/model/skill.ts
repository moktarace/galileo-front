import { Exercice } from "./exercice";

export class Skill {
    id: string;
    subject_id!: string;
    name: string;
    description: string;
    premium?: boolean;
    exercices: Exercice[];
    image?: string;
    order?: number;
    difficulty: number;
    video: string;

    constructor() {
        this.name = "";
        this.id = "";
        this.description = "";
        this.exercices = [];
        this.difficulty = 1;
        this.video = "";
    }
}