import * as React from "react";
import { render } from "react-dom";
import { Card } from 'primereact/card';
import { Skeleton } from 'primereact/skeleton';
import { Skill } from "../model/skill";


class SkillCard extends React.Component<Skill, Skill> {
    constructor(props: Skill) {
        super(props);
        this.state = props;
    }

    public componentDidMount() {
    }

    public componentDidUpdate() {
    }

    public render() {
        if (!this.state.id) {
            return (
                <Card>
                    <p><Skeleton shape="rectangle" /></p>
                    <p><Skeleton shape="rectangle" /></p>
                </Card>
            )
        }
        return (
            <Card title={this.state.name}>
                {this.state.description}
            </Card>
        );
    }
}

export default SkillCard;
