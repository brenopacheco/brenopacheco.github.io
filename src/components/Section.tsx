import { ReactElement } from 'react'
import '../assets/section.css';

export function Title(props: { text: string }): ReactElement {
    return (
        <div className="section-title">
            <p>{props.text}</p>
        </div>
    )
}

