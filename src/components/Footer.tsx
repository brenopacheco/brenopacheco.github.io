import { ReactElement } from 'react'
import '../assets/footer.css';
import { Media } from './Header';


export default function Footer(): ReactElement {
    return (
        <div id="footer" className="section">
            <hr/>
            <div>
                <p>breno leonhardt pacheco</p>
                <Media/>
            </div>
        </div>
    )
}

