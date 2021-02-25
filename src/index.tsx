import * as React from "react";
import { render } from "react-dom";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import "./styles.css";
import LevelPage from "./page/level-page";
import SkillPage from "./page/skill-page";
import DatabaseService from "./service/database-service";
import ExercicePage from "./page/exercice-page";

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
        /*this.database.isCreated().then(value => {
            if (!value) {
                this.database.initialize().then(() => this.setState({ databaseLoaded: true }));
            } else {
                this.setState({ databaseLoaded: true });
            }
        });*/
        this.database.initialize().then(() => this.setState({ databaseLoaded: true }));

    }

    public render() {
        if (!this.state.databaseLoaded) {
            return (
                <div className="uk-container uk-padding uk-container-large">
                    <div uk-spinner="true"></div>
                </div>
            );
        }
        return (
            <Router>
                <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
                    <div className="uk-navbar-container" uk-navbar="true">
                        <div className="uk-navbar-center">
                            <Link to="/" className="uk-navbar-item uk-logo">Galileo POC</Link>
                        </div>
                    </div>
                </div>
                <div className="uk-container uk-padding uk-container-large">
                    <Switch>
                        <Route path="/skill/:id">
                            <SkillPage database={this.database} />
                        </Route>
                        <Route path="/exercice/:id">
                            <ExercicePage database={this.database} />
                        </Route>
                        <Route path="/">
                            <LevelPage database={this.database} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
