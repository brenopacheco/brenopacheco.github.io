import React, { ComponentState, ReactElement } from 'react'
import '../assets/contact.css';
import { Title } from './Section';
import loading_img from '../assets/loading.svg';
import axios from 'axios';

export default function Contact(): ReactElement {
    return (
        <div id="contact" className="section">
            <Title text="contact me" />
            <Form />
        </div>
    )
}

// const url = "https://mailthis.to/brenopacheco";
const url = "https://formspree.io/f/xyybdand";



interface IForm {
    status: ReactElement | null,
    enabled: boolean,
    name: string,
    email: string,
    message: string
}

// {} means no props interface
// IForm is state interface
class Form extends React.Component<{}, IForm> {
    constructor(props: any) {
        super(props);
        this.state = {
            status: null,
            enabled: true,
            name: "",
            email: "",
            message: ""
        };
    }

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(this.state);
        this.setState({ status: <Loading /> });
        this.setState({ enabled: false });
        axios.post(`${url}`, {
        // axios.post(`/`, {
            name:    this.state.name,
            email:   this.state.email,
            message: this.state.message
          })
          .then((response) => {
              this.setState({ status: <Success/> });
              console.log(response);
          })
          .catch((error) => {
                this.setState({ status: Failure(error.response.statusText) });
                this.setState({ enabled: true });
          });
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        // as ComponentState is added here because we cannot index the interface
        // with string `name`
        this.setState({ [name]: value } as ComponentState);
    }

    render() {
        return (
            <form className="contact-form" onSubmit={this.handleSubmit}>
                <label>Feel free to send me a message:</label>
                <input    disabled={!this.state.enabled} onChange={this.handleChange} name="name"    placeholder="Name"  type="text"  required />
                <input    disabled={!this.state.enabled} onChange={this.handleChange} name="email"   placeholder="Email" type="email" required />
                <textarea disabled={!this.state.enabled} onChange={this.handleChange} name="message" placeholder="Message" required></textarea>
                <button type="submit" disabled={!this.state.enabled} >send message</button>
                {this.state.status}
            </form>
        );
    }
}

enum AlertType {
    loading,
    failure,
    success
}

function Alert(props: { message: string, additional?: ReactElement, config: AlertType }): ReactElement {
    return (
        <div className={"alert " + AlertType[props.config]}>
            <p>{props.message}</p>
            {props.additional}
        </div>
    );
}

const Success = () =>
    <Alert message="Message successfully sent"
        config={AlertType.success} />

const Failure = (error: string) =>
    <Alert message={"Failure:"}
        additional={<p>{error}</p>}
        config={AlertType.failure} />

const Loading = () =>
    <Alert message={"Sending message..."}
        additional={<img src={loading_img} alt="loading" />}
        config={AlertType.loading} />

