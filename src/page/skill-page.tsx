import * as React from "react";
import { Skill } from "../model/skill";
import ExericeModal from "../component/exercice-modal";
import YouTube from 'react-youtube';
import DatabaseService from "../service/database-service";
import { Result } from "../model/result";
import { Divider } from 'primereact/divider';

class SkillPageProp {
    constructor(public database: DatabaseService) { }
}
class SkillPageModel {
    constructor(public skill: Skill) { }
}
class SkillPage extends React.Component<SkillPageProp, SkillPageModel> {

    constructor(prop: any) {
        super(prop);
        this.state = {
            skill: {
                id: "",
                name: "",
                description: "",
                subject_id: "",
                exercices: []
            }
        }
    }


    public componentDidMount() {
        let id = +(window.location.href.split('/').pop() || '8329');
        this.props.database.getSkill(id).then((skill: Skill) => {
            this.setState({
                skill
            })
        });
    }

    public getVideoId(link?: string) {
        if (link) {
            return link.split('/').pop();
        }
        return '';
    }

    public addResult(result: Result) {
        this.props.database.addResult(result);
    }

    public render() {
        return (
            <div className="card">
                <h2>{this.state.skill?.name}</h2>
                <div className="p-d-flex">
                    <YouTube
                        videoId={this.getVideoId(this.state.skill.video)}
                    />

                    <Divider layout="vertical" />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: this.state.skill.description
                        }}></div>
                </div>
                <h2>Exercice</h2>
                {
                    this.state.skill.exercices.map((exo, value) =>
                        <ExericeModal key={value} exercice={exo} onFinish={(result: Result) => (this.addResult(result))} />
                    )
                }
            </div>
        );
    }
}

export default SkillPage;
