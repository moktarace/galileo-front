import * as React from "react";
import LevelList from "../component/level-list";
import { Subject } from "../model/subject";
import ServiceAPI from "../service/service-api";

class LevelPageModel {
    constructor(public subjects: Subject[] = []) { }
}
class LevelPage extends React.Component<any, LevelPageModel> {

    constructor(props: any) {
        super(props);
        this.state = {
            subjects: []
        };
    }

    public componentDidMount() {
        new ServiceAPI().getSubject().then((subjects: Subject[]) =>
            this.setState({
                subjects
            })
        );
    }

    public render() {
        return (
            <div className="card">
                <h2>POC</h2>
                <LevelList id="0" description=""
                    name="Première" subjects={this.state.subjects}></LevelList>
            </div>
        );
    }
}

export default LevelPage;
