import * as React from "react";
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
                <Card className="p-mr-2 p-mb-2">
                    <p><Skeleton shape="rectangle" /></p>
                    <p><Skeleton shape="rectangle" /></p>
                </Card>
            )
        }
        return (
            <Card className="p-mr-2 p-mb-2" title={this.state.name}>
                {this.state.description}
            </Card>
        );
    }
}

export default SkillCard;
