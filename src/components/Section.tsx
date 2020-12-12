import { ReactElement } from 'react'
import '../assets/section.css';

export function Title(props: { text: string }): ReactElement {
    return (
        <div className="section-title">
            <h2>{props.text}</h2>
        </div>
    )
}

