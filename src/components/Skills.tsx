import React, { ReactElement } from 'react'
import '../assets/skills.css';
import { Title } from './Section';

export default function Skills(): ReactElement {
    return (
        <div id="skills" className="section">
            <Title text="skills"/>
        </div>
    )
}
