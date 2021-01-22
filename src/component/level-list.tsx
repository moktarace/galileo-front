import * as React from "react";
import { Card } from 'primereact/card';
import { Level } from "../model/level";
import SubjectCaroussel from "./schedule-caroussel";


class LevelList extends React.Component<Level, Level> {
    constructor(props: Level) {
        super(props);
        this.state = props;
    }

    public componentDidMount() {
    }

    public componentDidUpdate() {
    }

    public render() {
        return (
            <div className="p-mr-2 card p-mb-2">
                <h5>{this.state.name}</h5>
                <h6>{this.state.description}</h6>
                <div className="card">
                    {
                        this.state.subjects.map(s => <SubjectCaroussel
                            id={s.id}
                            name={s.name}
                            description={s.description}
                            skills={s.skills}>
                        </SubjectCaroussel>)
                    }
                </div>
            </div>
        );
    }
}

export default LevelList;
