import { Level } from "../model/level";

const level: Level = {
    id: "",
    name: "Terminal",
    description: "Bientôt le bac maggle",
    subjects: [
        {
            id: "math",
            name: "Math",
            description: "Pas facile les math",
            skills: [
                { id: "math1", name: "Trigonometrie", description: "Trigonometrie", premium: false, exercices: [{ id: "math1exo1", name: "", description: "", question: "", tip: "", answer: "" }], tests: [] },
                { id: "math2", name: "Integrale", description: "Integrale", premium: false, exercices: [{ id: "math2exo1", name: "", description: "", question: "", tip: "", answer: "" }], tests: [] },
                { id: "math3", name: "Des maths", description: "Encore", premium: false, exercices: [{ id: "math3exo1", name: "", description: "", question: "", tip: "", answer: "" }], tests: [] },

            ]
        },
        {
            id: "physique",
            name: "Physique",
            description: "La Physique c'est pas mieux",
            skills: [
                { id: "physique1", name: "Labo", description: "Labo", premium: false, exercices: [{ id: "physique1exo1", name: "", description: "", question: "", tip: "", answer: "" }], tests: [] },
                { id: "physique2", name: "Truc de physique", description: "Truc de physique", premium: false, exercices: [{ id: "physique2exo1", name: "", description: "", question: "", tip: "", answer: "" }], tests: [] }
            ]
        },
    ]
}
export default level;