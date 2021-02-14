import * as React from "react";
import LevelList from "../component/level-list";
import { Subject } from "../model/subject";
import DatabaseService from "../service/database-service";

class LevelPageProp {
    constructor(public database: DatabaseService) { }
}
class LevelPageModel {
    constructor(public subjects: Subject[] = []) { }
}
class LevelPage extends React.Component<LevelPageProp, LevelPageModel> {

    constructor(props: any) {
        super(props);
        this.state = {
            subjects: []
        };
    }

    public componentDidMount() {
        this.props.database.getSubjects().then((subjects: Subject[]) => {
            this.setState({
                subjects
            })
        });
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
