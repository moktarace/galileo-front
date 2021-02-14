import * as React from "react";
import { Redirect } from "react-router-dom";
import { ProgressSpinner } from 'primereact/progressspinner';
import DatabaseService from "../service/database-service";


class StartPageProp {
    constructor(public database: DatabaseService) { }
}
class StartPageModel {
    constructor(public loaded: boolean = false) { }
}
class StartPage extends React.Component<StartPageProp, StartPageModel> {

    constructor(props: any) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    public componentDidMount() {
        this.props.database.isCreated().then(value => {
            if (!value) {
                this.props.database.initialize().then(() => this.setState({ loaded: true }));
            } else {
                this.setState({ loaded: true });
            }
        });
    }

    public render() {
        if (this.state.loaded) {
            return <Redirect to="level" />
        }
        return (
            <div className="card"><ProgressSpinner /></div>
        );
    }
}

export default StartPage;
