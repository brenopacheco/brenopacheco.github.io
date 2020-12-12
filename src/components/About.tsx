import React, { ReactElement } from 'react'

import '../assets/about.css';
import { Title } from './Section';
import Timeline from './Timeline';

const about_text = 
<>
    <p>
        I'm a <span className="colored">software development</span> student,
        currently attending Informatics Engineering in the city of <a
        className="colored" href="https://www.isep.ipp.pt/">Porto -
        Portugal</a>.
        I'm a fast learner and a great team player, having previously 
        completed a degree in Mechanical Engineering. 
    </p>
</>;

const data_items = [
    [ "Age",          "26 Years"                 ],
    [ "Address",      "Porto, Portugal"          ],
    [ "Phone",        "+351 936 493 517"         ],
    [ "Availability", "full-time "               ]
].map((item, idx) =>
        <div key={idx} className="data-item">
            <span className="colored">{item[0]}:</span><p>{item[1]}</p>
        </div>
);

export default function About(): ReactElement {
    return (
        <div id="about" className="section">
            <Title text="about me"/>
            <div className="about">
                <div className="lorem">
                    {about_text}
                </div>
                <div className="data">
                    {data_items}
                </div>
            </div>
            <Timeline/>
        </div>
    )
}


