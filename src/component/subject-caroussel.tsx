import * as React from "react";
import { Skill } from "../model/skill";
import { Subject } from "../model/subject";
import SkillCard from "./skill-card";


class SubjectCaroussel extends React.Component<Subject, any> {

    public render() {
        return (
            <div className="uk-padding">
                <h2>{this.props.name}</h2>
                <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid="true">
                    {
                        (this.props.skills.map((skill: Skill) => <SkillCard key={skill.id} video={skill.video} id={skill.id} subject_id={skill.subject_id} name={skill.name} description={skill.description} exercices={skill.exercices} image={skill.image} difficulty={skill.difficulty} premium={skill.premium}></SkillCard>))
                    }
                </div>
            </div >
        );
    }
}

export default SubjectCaroussel;
