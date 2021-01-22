import * as React from "react";
import level from "../service/databse";
import SkillList from "../component/skill-list";


class SkillPage extends React.Component<any, any> {

    public componentDidMount() {
    }

    public componentDidUpdate() {
    }

    public render() {
        return (
            <div className="p-mb-2">
                <SkillList tests={level.subjects[0].skills[0].tests} premium={false} id={level.subjects[0].skills[0].id} description={level.subjects[0].skills[0].description}
                    name={level.subjects[0].skills[0].name} exercices={level.subjects[0].skills[0].exercices}></SkillList>
            </div>
        );
    }
}

export default SkillPage;
