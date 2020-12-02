import React, { ReactElement } from 'react'

import '../assets/about.css';
import { Title } from './Section';

const about_text = <p>
    I'm a <span className="colored">software development</span> student, currently
    attending Informatics Engineering in the city of Porto - Portugal at the
    instutute <a className="colored" href="https://www.isep.ipp.pt/">ISEP - IPP</a>.
    I'm a second-time graduate student, having completed a degree in Mechanical Engineering.
</p>;

const info_items = [
    [ "Age",       "27 Years"                ],
    [ "Address",   "Front Street, Mexico Us" ],
    [ "E-mail",    "email@example.com"       ],
    [ "Phone",     "+0123 123 456 789"       ],
    [ "Freelance", "Available "              ]
].map(item =>
        <p className="info-item">
            <span className="colored">{item[0]}:</span>{item[1]}
        </p>
);

export default function About(): ReactElement {
    return (
        <div id="about" className="section">
            <Title text="about me"/>
            <div className="about">
                {about_text}
            </div>
            <div className="data">
                {info_items}
            </div>
        </div>
    )
}


