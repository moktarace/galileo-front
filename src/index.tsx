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
import LevelPage from "./page/level-page";
import SkillPage from "./page/skill-page";
import StartPageModel from "./page/start-page";
import DatabaseService from "./service/database-service";


class App extends React.Component<any, any> {

    public render() {
        var database: DatabaseService = new DatabaseService();
        return (
            <Router>
                <div className="p-component">
                    <div className="p-mr-2">
                        <Switch>
                            <Route path="/skill/:id">
                                <SkillPage database={database} />
                            </Route>
                            <Route path="/level">
                                <LevelPage database={database} />
                            </Route>
                            <Route path="/">
                                <StartPageModel database={database} />
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
