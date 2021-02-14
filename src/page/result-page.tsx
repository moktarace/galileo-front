import * as React from "react";
import LevelList from "../component/level-list";
import { Subject } from "../model/subject";
import ServiceAPI from "../service/service-api";
import { Result } from "../model/result";

class ResultPageModel {
    constructor(public results: Result[] = []) { }
}
class ResultPage extends React.Component<any, ResultPageModel> {

    constructor(props: any) {
        super(props);
        this.state = {
            results: []
        };
    }

    public render() {
        return (
            <div className="card">
            </div>
        );
    }
}

export default ResultPage;
