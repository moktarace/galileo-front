import { Exercice } from "./exercice";

export class Skill {
    id!: string;
    name!: string;
    description!: string;
    premium!: boolean;
    exercices!: Exercice[];
}