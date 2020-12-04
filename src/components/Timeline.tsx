import React, { ReactElement } from 'react';
import '../assets/timeline.css';

export default function Timeline(): ReactElement {
    return (
        <div className="timeline">
            <div className="bar"/>
            <div className="items">
                <Item
                    date="2018 - today"
                    title="Informatics Engineering"
                    location="ISEP - Porto, Portugal"
                    description="university course on software engineering"
                />
                <Item
                    date="2012 - 2018"
                    title="Mechanical Engineering"
                    location="UFRGS - Porto Alegre, Brazil"
                    description="5 year course on Mechanical Engineering"
                />
                <Item
                    date="2018"
                    title="Internship (Mech)"
                    location="MKS Engineering, Porto Alegre, Brazil "
                    description="Writing of inspection reports for industrial equipment"
                />
                <Item
                    date="2013 -  2016"
                    title="Mechanical Technician"
                    location="SENAI - Porto Alegre, Brazil "
                    description="Use of machine tools for fabrication in industrial environments."
                />
                <Item
                    date="2016"
                    title="Internship (Technician)"
                    location="Tendence Geradores, Porto Alegre, Brazil"
                    description="Drawing of power generator sets and assemblies through computer aided design"
                />
            </div>
        </div>
    )
}

interface ItemProps {
    date: string,
    title: string,
    location: string,
    description: string
}

function Item(props: ItemProps): ReactElement {
    return (
        <div className="timeline-item">
            <div className="title">{props.title}</div>
            <div className="date">{props.date}</div>
            <div className="location">{props.location}</div>
            <div className="description">{props.description}</div>
        </div>
    );
}

// https://flaviocopes.com/typescript-object-destructuring/
// { "what": thefuck }: { thefuck: string }  
// will assign "what" to the variable thefuck which is of type string
// it's not the other way around. what the fuck typescript
// const Title = ({ "thefuck": what }: { what: string}) =>
//     <div className="title">{what}</div>

