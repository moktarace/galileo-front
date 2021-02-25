import * as React from "react";
import { Skill } from "../model/skill";
import { Link } from "react-router-dom";


class SkillCard extends React.Component<Skill, any> {

    public getDifficulty() {
        const label: any = {
            1: 'Débutant',
            2: 'Intermediaire',
            3: 'Difficile',
            0: ''
        }
        return < div className="uk-card-badge uk-label" > {label[this.props.difficulty]}</div>
    }

    public render() {
        return (
            <Link to={`/skill/${this.props.id}`}>
                <div className="uk-card uk-card-hover uk-card-default">
                    <div className="uk-card-media-top">
                        <img alt="Card" src={this.props.image} />
                    </div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">{this.props.name}</h3>
                        {this.getDifficulty()}
                    </div>
                </div>
            </Link>

        );
    }
}

export default SkillCard;
