import * as React from "react";
import { Card } from 'primereact/card';
import { Skeleton } from 'primereact/skeleton';
import { Skill } from "../model/skill";
import { Link } from "react-router-dom";


class SkillCard extends React.Component<Skill, any> {

    public render() {
        if (!this.props.id) {
            return (
                <Card className="p-mr-2 p-mb-2">
                    <p><Skeleton shape="rectangle" /></p>
                    <p><Skeleton shape="rectangle" /></p>
                </Card>
            )
        }
        return (
            <Link to={`/skill/${this.props.id}`}>
                <Card className="p-mr-2 p-mb-2"
                    header={<img alt="Card" src={this.props.image} />}
                    title={this.props.name}>
                </Card>
            </Link>

        );
    }
}

export default SkillCard;
