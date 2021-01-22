import * as React from "react";
import LevelList from "../component/level-list";
import level from "../service/databse";


class LevelPage extends React.Component<any, any> {

    public componentDidMount() {
    }

    public componentDidUpdate() {
    }

    public render() {
        return (

            <div className="p-grid">
                <div className="p-col">
                    <LevelList id={level.id} description={level.description}
                        name={level.name} subjects={level.subjects}></LevelList>
                </div>
            </div>
        );
    }
}

export default LevelPage;
