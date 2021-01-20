import { Subject } from "./subject";

export class Level {
    id!: string;
    name!: string;
    description!: string;
    subjects!: Subject[];
}