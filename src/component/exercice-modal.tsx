import * as React from "react";
import { Exercice } from "../model/exercice";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

class ExericeModalProps {
    constructor(public exercice: Exercice, public onFinish: Function) { }
}
class ExericeModal extends React.Component<ExericeModalProps, any> {

    constructor(prop: ExericeModalProps) {
        super(prop);
        this.state = {
            started: false,
            step: 1,
            done: false,
            time: 0,
            success: false
        }
    }

    public getContent() {
        if (this.state.done) {
            return this.props.exercice.answer;
        }
        return this.getQuestion();
    }

    public getNbStep() {
        return Math.max(this.props.exercice.questions.length - 1, 1);
    }

    public getQuestion() {
        let result = this.props.exercice.questions[0];
        for (let i = 1; i <= this.state.step; i += 1) {
            if (this.props.exercice.questions[i]) {
                result += '<li>' + this.props.exercice.questions[i]
            }
        }
        return result;
    }

    public getResponses() {
        return ["Reponse A", "Reponse B", "Reponse C", "Reponse D"]
    }

    public finish() {
        this.props.onFinish({
            id: Date.now(),
            success: true,
            date: Date.now(),
            exercice_id: this.props.exercice.id,
            time: Date.now() - this.state.time
        });
        this.setState({
            done: true,
            success: true
        });
    }

    public start() {
        this.setState({
            started: true,
            time: Date.now()
        })
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

    public close() {
        this.setState({
            done: false,
            step: 1,
            started: false
        })
    }

    public getFooter() {
        if (!this.state.done) {
            return <div>
                {
                    this.getResponses().map((value, index) =>
                        <Button key={index} label={value} onClick={() => this.nextStep()} className="p-button-text" />
                    )
                }
            </div>
        }
        return <div>
            <Button label="C'est compris" icon="pi pi-check" onClick={() => this.close()} autoFocus />
        </div>
    }

    public render() {
        return (
            <div className="card">
                <Button label={this.props.exercice.name} icon="pi pi-external-link" onClick={() => this.start()} />
                <Dialog header={this.props.exercice.name} visible={this.state.started} style={{ width: '50vw' }} footer={this.getFooter()} onHide={() => this.close()}>
                    <Latex>{this.getContent()}</Latex>
                </Dialog>
            </div >

        );
    }
}

export default ExericeModal;
