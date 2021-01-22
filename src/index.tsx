import * as React from "react";
import { render } from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/arya-blue/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import "./styles.css";
import LevelPage from "./page/level-page";
import SkillPage from "./page/skill-page";


class App extends React.Component<any, any> {

    public componentDidMount() {
    }

    public componentDidUpdate() {
    }


    public render() {
        return (
            <Router>
                <div className="container layout-wrapper">
                    <div className="p-mr-2">
                        <Switch>
                            <Route path="/skill/:id">
                                <SkillPage />
                            </Route>
                            <Route path="/">
                                <LevelPage />
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