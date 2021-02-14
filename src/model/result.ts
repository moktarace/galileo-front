import { Exercice } from "./exercice";

export class Result {
    id!: string;
    success!: boolean;
    date!: number;
    time!: number;
    exercice!: Exercice;
}