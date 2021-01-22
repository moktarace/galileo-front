import * as React from "react";
import { Level } from "../model/level";
import SubjectCaroussel from "./schedule-caroussel";


class LevelList extends React.Component<Level, any> {

    public componentDidMount() {
    }

    public componentDidUpdate() {
    }

    public render() {
        return (
            <div className="p-mr-2 card p-mb-2">
                <h5>{this.props.name}</h5>
                <h6>{this.props.description}</h6>
                <div className="">
                    {
                        this.props.subjects.map(s => <SubjectCaroussel
                            key={s.id}
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
