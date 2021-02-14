import * as React from "react";
import { Exercice } from "../model/exercice";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import ServiceAPI from "../service/service-api";

class ExericeModal extends React.Component<Exercice, any> {

    constructor(prop: Exercice) {
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
            return this.props.answer;
        }
        return this.props.question;
    }

    public finish() {
        new ServiceAPI().saveResult({
            id: Date.now().toString(),
            success: true,
            date: Date.now(),
            exercice: this.props,
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
                <Button label={this.props.name} icon="pi pi-external-link" onClick={() => this.start()} />
                <Dialog header={this.props.name} visible={this.state.visible} style={{ width: '50vw' }} footer={this.getFooter()} onHide={() => this.close()}>
                    <Latex>{this.getContent()}</Latex>
                </Dialog>
            </div >

        );
    }
}

export default ExericeModal;
