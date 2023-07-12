import React from "react";

import useInView from "./useInView";
import Section from "./section";
import Card from "./card";

import crosspaintImage from "../public/images/crosspaint.jpeg";

import linkedInIcon from "../public/images/linkedin.svg";
import githubIcon from "../public/images/github.svg";

import styles from "../public/css/Projects.module.css";

export default function Projects() {
    const sectionRef = React.useRef();
    const inView = useInView(sectionRef, 0.25);

    return <Section innerRef={sectionRef} id="projects" className={`${styles.Projects} ${inView ? styles.inView : ""}`}>
        <a className={styles.BackUp} href="#about"><div className={styles.Arrow}></div><br />Go back</a>
        
        <div className={styles.Split}>
            <div className={styles.Showcase}>
                <h1>Projects</h1>
                <Card title="CROSSPAINT" year="2023" url="https://www.crosspaint.net/" src={crosspaintImage} description="An online multiplayer nonogram game, where players work together to solve a larger image." />
                <p className={styles.Sub}>With many more to come...</p>
            </div>
      
            <div className={styles.Contact}>
                <h1>Want to work with me?</h1>
                <p>Contact me at my email below for any business enquiries.</p>
                <a className={styles.Email} href="mailto:info@georgebeers.net">info<span>@</span>georgebeers.net</a>
            </div>
        </div>

        <div className={styles.Socials}>
            <a target="_blank" href="https://github.com/georgebeers"><img src={githubIcon} alt="Github icon."></img></a>
            <a target="_blank" href="https://www.linkedin.com/in/george-beers-155093283/"><img src={linkedInIcon} alt="LinkedIn icon."></img></a>
        </div>

        <p className={styles.Copyright}><span style={{fontFamily: "serif"}}>©</span> George Beers 2023. All rights reserved.</p>
    </Section>;
}