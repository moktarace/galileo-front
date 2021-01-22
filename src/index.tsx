import * as React from "react";
import { render } from "react-dom";
import 'primereact/resources/themes/arya-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import "./styles.css";
import LevelList from "./component/level-list";
import level from "./service/databse";


class App extends React.Component<any, any> {

    public componentDidMount() {
    }

    public componentDidUpdate() {
    }

    public handleQuoteChange(event: any) {
        this.setState({
            quote: event.target.value
        });
    }

    public handleAnswerChange(event: any) {
        this.setState({
            answer: event.target.value
        });
    }

    public render() {

        return (
            <div>
                <LevelList id={level.id} description={level.description}
                    name={level.name} subjects={level.subjects}></LevelList>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
