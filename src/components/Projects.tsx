import React, { ReactElement } from 'react'
import '../assets/projects.css';
import { Title } from './Section';
import picA from '../assets/placeholder.png';
import picB from '../assets/placeholder.png';
// import picC from '../assets/placeholder.png';


export default function Projects(): ReactElement {
    return (
        <div id="projects" className="section">
            <Title text="projects" />
            <div className="projects">
                {projectA}
                {projectB}
            </div>
        </div>
    )
}

interface ProjectProps {
    title: string;
    img: string;
    description: ReactElement;
}

function Project(props: ProjectProps) {
    return (
        <div className="project-item">
            <img className="image" src={props.img} alt="proj"/>
            <div className="title">
                {props.title}
            </div>
            <div className="description">
                {props.description}
            </div>
        </div>
    );
}
            // <div className="image">
                 // style={{backgroundImage: `url(${props.img})`}}/>

const G = (text: string) => <span className="colored">{text}</span>;

let projectA = Project({
    title: "Agile Board demo app",
    img: picA,
    description:
        <p>
            Demo application written in {G(" Typescript ")} using 
            {G(" React, Redux, Express, ")} and {G(" Redis. ")} Tested with 
            {G(" Jest ")} in an automated workflow provided by {G(" Github Actions, ")}
            with releases orchestrated by {G(" Docker ")} and deployed using {G(" Heroku ")}
            pipelines.
        </p>
});

let projectB = Project({
    title: "Webchat demo app",
    img: picB,
    description:
        <p>
            Demo application for online web chatting through {G(" Websockets ")} 
            with an Event Drive architecture using {G(" RabbitMQ ")} for
            communication and {G(" Protobuf ")} for API synchronization through
            export of multi-language {G(" SDKs ")}.
        </p>
});
