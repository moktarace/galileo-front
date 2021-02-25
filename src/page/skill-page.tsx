import * as React from "react";
import { Skill } from "../model/skill";
import DatabaseService from "../service/database-service";
import { Result } from "../model/result";
import SkillCard from "../component/skill-card";
import { Link } from "react-router-dom";
import Video from "../component/video";

class SkillPageProp {
    constructor(public database: DatabaseService) { }
}
class SkillPageModel {
    constructor(public skill: Skill, public recommanded: Skill[]) { }
}
class SkillPage extends React.Component<SkillPageProp, SkillPageModel> {

    constructor(prop: any) {
        super(prop);
        this.state = {
            skill: {
                id: "",
                name: "",
                description: "",
                difficulty: 1,
                subject_id: "",
                video: "",
                exercices: []
            },
            recommanded: []
        }
    }

    public componentDidMount() {
        const id = +(window.location.href.split('/').pop() || '8329');
        this.props.database.getSkill(id).then((skill: Skill) => {
            this.props.database.getRecommandedSkills(skill).then((recommanded: Skill[]) => {
                this.setState({
                    recommanded
                })
            });
            this.setState({
                skill
            })
        });
    }


    public addResult(result: Result) {
        this.props.database.addResult(result);
    }

    public render() {
        return (
            <article className="uk-article">
                <h1 className="uk-article-title">{this.state.skill?.name}</h1>
                <h2>Cours</h2>
                <div className="uk-panel">
                    <div className="uk-align-left uk-margin-remove-adjacent">
                        <Video link={this.state.skill.video} />
                    </div>
                    <p dangerouslySetInnerHTML={{
                        __html: this.state.skill.description
                    }}></p>
                </div>
                <hr className="uk-divider-icon" />
                <h2>Exercices</h2>
                <ul className="uk-list">
                    {
                        this.state.skill.exercices.map(exo =>
                            <li><Link key={exo.id} className="" to={'/exercice/' + exo.id}>{exo.name}</Link></li>)
                    }
                </ul>
                <hr className="uk-divider-icon" />
                <h2>Compétances recommandées</h2>
                <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid="true">
                    {
                        (this.state.recommanded.map((skill: Skill) => <SkillCard video={skill.video} key={skill.id} id={skill.id} subject_id={skill.subject_id} name={skill.name} description={skill.description} exercices={skill.exercices} image={skill.image} difficulty={skill.difficulty} premium={skill.premium}></SkillCard>))
                    }
                </div>
            </article>
        );
    }
}

export default SkillPage;
