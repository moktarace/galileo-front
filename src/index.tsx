import * as React from "react";
import { render } from "react-dom";
import 'primereact/resources/themes/arya-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import "./styles.css";
import SubjectCaroussel from "./component/schedule-caroussel";
import subjects from "./service/databse";


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
            <div className="">
                <SubjectCaroussel
                    id={subjects[0].id}
                    name={subjects[0].name}
                    description={subjects[0].description}
                    skills={subjects[0].skills}>
                </SubjectCaroussel>
            </div >
        );
    }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
