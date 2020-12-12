import React, { ReactElement } from 'react'
import '../assets/skills.css';
import { Title } from './Section';

export default function Skills(): ReactElement {
    return (
        <div id="skills" className="section">
            <Title text="skills"/>
            <div className="skills">
                {programming}
                {tools}
                {languages}
            </div>
        </div>
    )
}

const Skillbox: React.FC<{title: string}> = ({title, children}) => {
    return (
        <div className="skill-box">
            <div className="title">
                {title}
            </div>
            {children}
        </div>
    );
}


interface SkillItemProps {
    skill: string;
    level: number;
}

function SkillItem(props: SkillItemProps) {
    return (
        <div className="skill-item">
            <div className="skill">
                {props.skill}
            </div>
            <div className="level" style={{ width: props.level + "%" }}/>
        </div>
    );
}

const programming =
    <Skillbox title="Programming">
        <SkillItem skill="Javascript & Typescript" level={90}/>
        <SkillItem skill="SQL, noSQL and ORM" level={70}/>
        <SkillItem skill="Java & Spring" level={60}/>
        <SkillItem skill="C/C++ & Lua" level={40}/>
    </Skillbox>

const tools =
    <Skillbox title="Tooling and libraries">
        <SkillItem skill="Linus & shell scripting" level={100}/>
        <SkillItem skill="NodeJS & Express" level={80}/>
        <SkillItem skill="React & Redux" level={70}/>
        <SkillItem skill="HTML & CSS" level={70}/>
    </Skillbox>

const languages =
    <Skillbox title="Languages">
        <SkillItem skill="English" level={90}/>
        <SkillItem skill="Portuguese" level={100}/>
        <SkillItem skill="French" level={50}/>
        <SkillItem skill="Spanish" level={30}/>
    </Skillbox>
