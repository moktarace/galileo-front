import * as React from "react";
import { Level } from "../model/level";
import SubjectCaroussel from "./subject-caroussel";


class LevelList extends React.Component<Level, any> {

    public render() {
        return (
            <div className="">
                <h1>Leçons</h1>
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
        );
    }
}

export default LevelList;
