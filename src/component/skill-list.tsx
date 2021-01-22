import * as React from "react";
import { Skill } from "../model/skill";
import { Exercice } from "../model/exercice";
import { Test } from "../model/test";

import { ListBox } from 'primereact/listbox';

class SkillList extends React.Component<Skill, any> {

    public componentDidMount() {
    }

    public componentDidUpdate() {
    }

    public render() {
        return (
            <div className="p-mr-2 p-mb-2">
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <h6>Exercices</h6>
                <ListBox optionLabel="name" optionValue="id" options={this.props.exercices} onChange={(e) => console.log(e.value)} />
                <h6>Tests</h6>
                <ListBox optionLabel="name" optionValue="id" options={this.props.tests} onChange={(e) => console.log(e.value)} />

            </div>
        );
    }
}

export default SkillList;
