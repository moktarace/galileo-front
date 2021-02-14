import * as React from "react";
import { Skill } from "../model/skill";
import { Panel } from 'primereact/panel';
import ServiceAPI from "../service/service-api";
import ExericeModal from "../component/exercice-modal";
import YouTube from 'react-youtube';

class SkillPageModel {
    constructor(public skill: Skill) { }
}
class SkillPage extends React.Component<any, SkillPageModel> {

    constructor(prop: any) {
        super(prop);
        this.state = {
            skill: {
                id: "",
                name: "",
                description: "",
                exercices: []
            }
        }
    }

    public getId() {
        return window.location.href.split('/').pop() || '8329';
    }

    public componentDidMount() {
        new ServiceAPI().getSkill(this.getId()).then((skill: Skill) => {
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

    public render() {
        return (
            <div className="card">
                <h2>{this.state.skill?.name}</h2>
                <Panel header="Cours">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: this.state.skill.description
                        }}></div>
                    <YouTube
                        videoId={this.getVideoId(this.state.skill.video)}
                    />
                </Panel>
                {
                    this.state.skill.exercices.map((exo, value) =>
                        <ExericeModal id={exo.id} answer={exo.answer} question={exo.question}
                            name={exo.name} description={exo.description} tip={exo.tip} />
                    )
                }
            </div>
        );
    }
}

export default SkillPage;
