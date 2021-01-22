import * as React from "react";
import { Skill } from "../model/skill";
import { Subject } from "../model/subject";
import { Carousel } from "primereact/carousel";
import SkillCard from "./skill-card";


const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];
class SubjectCaroussel extends React.Component<Subject, Subject> {
    constructor(props: Subject) {
        super(props);
        this.state = props;
    }

    public componentDidMount() {
    }

    public componentDidUpdate() {
    }

    public render() {
        return (
            <div className="card">
                <h5>{this.state.name}</h5>
                <Carousel
                    responsiveOptions={responsiveOptions}
                    numVisible={3}
                    numScroll={1}
                    circular={true}
                    value={this.state.skills}
                    itemTemplate={(skill: Skill) => <SkillCard id={skill.id} name={skill.name} description={skill.description} exercices={skill.exercices} premium={skill.premium}></SkillCard>}
                ></Carousel>
            </div>
        );
    }
}

export default SubjectCaroussel;
