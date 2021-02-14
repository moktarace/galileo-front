import { Skill } from "./skill";

export class Subject {
    id!: string;
    name!: string;
    description: string;
    skills!: Skill[];

    constructor() {
        this.description = "";
    }
}