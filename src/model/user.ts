import { Level } from "./level";
import { Result } from "./result";

export class User {
    id!: string;
    username!: string;
    token!: string;
    premium!: boolean;
    level!: Level;
    results!: Result[];
}