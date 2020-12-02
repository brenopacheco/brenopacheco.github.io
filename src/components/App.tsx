import React, { ReactElement } from 'react';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';
import '../assets/app.css';
// import '../assets/boxes.css';

export default function App(): ReactElement {
    return (
        <div className="container">
            <Header />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}
