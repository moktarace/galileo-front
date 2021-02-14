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
            visible: false,
            done: false,
            time: 0,
            success: false
        }
    }

    public getContent() {
        if (this.state.done) {
            return this.props.exercice.answer;
        }
        return this.props.exercice.question;
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
            visible: !this.state.visible,
            time: Date.now()
        })
    }


    public close() {
        this.setState({
            done: false,
            visible: !this.state.visible
        })
    }

    public getFooter() {
        if (!this.state.done) {
            return <div>
                <Button label="Reponse A" onClick={() => this.finish()} className="p-button-text" />
                <Button label="Reponse B" onClick={() => this.finish()} className="p-button-text" />
                <Button label="Reponse C" onClick={() => this.finish()} className="p-button-text" />
                <Button label="Reponse D" onClick={() => this.finish()} className="p-button-text" />
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
                <Dialog header={this.props.exercice.name} visible={this.state.visible} style={{ width: '50vw' }} footer={this.getFooter()} onHide={() => this.close()}>
                    <Latex>{this.getContent()}</Latex>
                </Dialog>
            </div >

        );
    }
}

export default ExericeModal;
