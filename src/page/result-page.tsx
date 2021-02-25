import * as React from "react";
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
