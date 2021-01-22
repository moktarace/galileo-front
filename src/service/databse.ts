import { Level } from "../model/level";

const level: Level = {
    id: "",
    name: "Terminal",
    description: "Bientôt le bac maggle",
    subjects: [
        {
            id: "",
            name: "Math",
            description: "Pas facile les math",
            skills: [
                { id: "test", name: "Trigonometrie", description: "Trigonometrie", premium: false, exercices: [{ id: "", name: "", description: "", question: "", tip: "", answer: "" }] },
                { id: "test", name: "Integrale", description: "Integrale", premium: false, exercices: [{ id: "", name: "", description: "", question: "", tip: "", answer: "" }] },
            ]
        },
        {
            id: "",
            name: "Physique",
            description: "La Physique c'est pas mieux",
            skills: [
                { id: "test", name: "Labo", description: "Labo", premium: false, exercices: [{ id: "", name: "", description: "", question: "", tip: "", answer: "" }] },
                { id: "test", name: "Truc de physique", description: "Truc de physique", premium: false, exercices: [{ id: "", name: "", description: "", question: "", tip: "", answer: "" }] }
            ]
        },
    ]
}
export default level;