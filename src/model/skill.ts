import { Exercice } from "./exercice";
import { Test } from "./test";

export class Skill {
    id!: string;
    name!: string;
    description!: string;
    premium!: boolean;
    exercices!: Exercice[];
    tests!: Test[];
}