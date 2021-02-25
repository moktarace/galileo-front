import * as React from "react";
import DatabaseService from "../service/database-service";
import { Result } from "../model/result";
import { Exercice } from "../model/exercice";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { Link } from "react-router-dom";

class ExercicePageProp {
    constructor(public database: DatabaseService) { }
}
class ExercicePageModel {
    public done?: boolean;
    public success?: boolean;

    constructor(public exercice: Exercice, public time: number, public step: number) { }
}
class ExercicePage extends React.Component<ExercicePageProp, ExercicePageModel> {

    constructor(prop: any) {
        super(prop);
        this.state = {
            exercice: {
                id: '',
                skill_id: '',
                questions: [],
                answer: '',
                enonce: '',
                tip: '',
                name: '',
                description: '',
            },
            step: 0,
            done: false,
            time: 0,
            success: false
        }
    }

    public componentDidMount() {
        const id = +(window.location.href.split('/').pop() || '8329');
        this.props.database.getExercice(id).then((exercice: Exercice) => {
            this.setState({
                exercice,
                time: Date.now()
            })
        });
    }


    public getNbStep(): number {
        return Math.max(this.state.exercice.questions.length - 1, 1);
    }

    public getPreQuestion(): string {
        if (this.state.exercice.questions.length === 0) {
            return '';
        }
        return this.state.exercice.questions[0];
    }


    public getQuestions(): string[] {
        if (this.state.exercice.questions.length === 0) {
            return [];
        }
        return this.state.exercice.questions.slice(0, this.state.step + 1);
    }

    public getResponses() {
        return ["Reponse A", "Reponse B", "Reponse C", "Reponse D"]
    }

    public finish() {
        const result: Result = ({
            id: Date.now(),
            success: true,
            date: Date.now(),
            exercice_id: this.state.exercice.id,
            time: Date.now() - this.state.time
        });
        this.props.database.addResult(result);
        this.setState({
            done: true,
            success: true
        });
    }

    public nextStep() {
        if (this.state.step === this.getNbStep()) {
            this.finish();
        } else {
            this.setState({
                step: this.state.step + 1
            });
        }
    }

    public getFooter() {
        if (!this.state.done) {
            return <div>
                {
                    this.getResponses().map((r, i) =>
                        <button key={i} onClick={() => this.nextStep()}
                            className="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"> {r}</button>)
                }
            </div>
        }
        return <Link to={'/skill/' + this.state.exercice.skill_id} type="button" className="uk-button uk-button-primary">C'est compris</Link>
    }

    public render() {
        return (
            <article className="uk-article">
                <h1 className="uk-article-title">{this.state.exercice.name}</h1>
                <h2>Enoncé</h2>
                <div className="uk-panel">
                    <Latex>{this.getPreQuestion()}</Latex>
                </div>
                <hr className="uk-divider-icon" />
                <h2>Questions</h2>
                <div className="uk-panel">
                    <ul className="uk-list uk-list-decimal">
                        {
                            this.getQuestions().map((q, i) => <li key={i}><Latex>{q}</Latex></li>)
                        }
                    </ul>
                </div>
                <hr className="uk-divider-icon" />
                {
                    this.state.done && <div>
                        <h2>Correction</h2>
                        <div className="uk-panel">
                            <Latex>{this.state.exercice.answer}</Latex>
                        </div>
                        <hr className="uk-divider-icon" />
                    </div>
                }
                {this.getFooter()}
            </article >
        );
    }
}

export default ExercicePage;
