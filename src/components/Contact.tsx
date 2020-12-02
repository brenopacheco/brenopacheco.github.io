import React, { ReactElement } from 'react'
import '../assets/contact.css';
import { Title } from './Section';

export default function Contact(): ReactElement {
    return (
        <div id="contact" className="section">
            <Title text="contact me" />
            <Form />
        </div>
    )
}

const mailchimp_url = "#";

function Form(): ReactElement {
    return (
        <form className="contact-form" action={mailchimp_url} method="post">
            <label>Feel free to send me a message:</label>
            <input type="text" id="fname" name="fname" placeholder="First name" />
            <input type="text" id="lname" name="lname" placeholder="Last Name" />
            <textarea id="message" name="message" placeholder="Message" />
            <button>send message</button>
        </form>
    );
}
// type="submit"
