import React, { ReactElement } from 'react';
import {
    FaGithub,
    FaLinkedin,
    FaPaperPlane,
    FaPhone
} from "react-icons/fa";
import { IconType } from 'react-icons/lib';
import '../assets/header.css';
import pic from '../assets/picture.png';



export default function Header(): ReactElement {
    return (
        <div className="header">
            <Picture/>
            <Info/>
            <Navbar/>
            <Media/>
        </div>
    )
}



function Picture(): ReactElement {
    return (
        <div className="profile-picture">
            <img src={pic} alt="pic"/>
        </div>
    );
}

function Info(): ReactElement {
    return (
        <div className="info">
            <h1>Breno Leonhardt Pacheco</h1>
            <p>Software development student</p>
        </div>
    );
}


function Navbar(): ReactElement {
    return (
        <div className="navbar">
            <ul>
             <li><a className="nav-link" href="#about">about</a></li>   
             <li><a className="nav-link" href="#projects">projects</a></li>   
             <li><a className="nav-link" href="#skills">skills</a></li>   
             <li><a className="nav-link" href="#contact">contact</a></li>   
            </ul>
        </div>
    );
}



export function Media(): ReactElement {
    return (
        <div className="media">
            <ul>
             <MediaListItem icon={FaGithub}     href="https://github.com/brenopacheco" text="Github"/>
             <MediaListItem icon={FaLinkedin}   href="https://www.linkedin.com/in/brenopacheco" text="LinkedIn"/>
             <MediaListItem icon={FaPaperPlane} href="mailto:brenoleonhardt@gmail.com" text="Email"/>
             <MediaListItem icon={FaPhone}      href="#contact" text="+351 936 493 517"/>
            </ul>
        </div>
    );
}

function MediaListItem(props: { icon: IconType, href: string, text: string }): ReactElement {
    return (
        <li className="media-item">
            <a href={props.href}>
                {React.createElement(props.icon)}
            </a>
            <div className="tooltip">
                <p>{props.text}</p>
            </div>
        </li>
    );
}

 // target="_blank"

// , href: string, text: string

// interface MediaProps {
//     children: {
//         icon: ReactNode
//     }
// }
// class MediaItem extends React.Component<MediaProps> {
//     render() {
//         const { icon } = this.props.children;
//         return(
//             <div className="media-item">
//                  <div className="icon">
//                     {icon}
//                 </div>
//             </div>
//         );
//     }
// }

