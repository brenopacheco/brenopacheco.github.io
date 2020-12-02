import React, { ReactElement } from 'react'
import '../assets/projects.css';
import { Title } from './Section';

export default function Projects(): ReactElement {
    return (
        <div id="projects" className="section">
            <Title text="projects"/>
        </div>
    )
}

