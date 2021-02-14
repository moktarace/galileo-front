import * as React from "react";
import { render } from "react-dom";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import "./styles.css";
import { ProgressSpinner } from 'primereact/progressspinner';
import LevelPage from "./page/level-page";
import SkillPage from "./page/skill-page";
import DatabaseService from "./service/database-service";

class AppState {
    constructor(public databaseLoaded: boolean = false) { }
}
class App extends React.Component<any, AppState> {

    private database: DatabaseService;

    constructor(prop: any) {
        super(prop);
        this.state = {
            databaseLoaded: false
        };
        this.database = new DatabaseService();
    }


    public componentDidMount() {
        this.database.isCreated().then(value => {
            if (!value) {
                this.database.initialize().then(() => this.setState({ databaseLoaded: true }));
            } else {
                this.setState({ databaseLoaded: true });
            }
        });
    }

    public render() {
        if (!this.state.databaseLoaded) {
            return (
                <div className="card"><ProgressSpinner /></div>
            );
        }
        return (
            <Router>
                <div className="p-component">
                    <div className="p-mr-2">
                        <Switch>
                            <Route path="/skill/:id">
                                <SkillPage database={this.database} />
                            </Route>
                            <Route path="/">
                                <LevelPage database={this.database} />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
