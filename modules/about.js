import React from "react";

import useInView from "./useInView";
import Section from "./section";

import coverPhoto from "../public/images/me.jpg";
import styles from "../public/css/About.module.css";

export default function About() {
    const sectionRef = React.useRef();
    const inView = useInView(sectionRef, 0.5);

    return <Section innerRef={sectionRef} id="about" className={`${styles.About} ${inView ? styles.inView : ""}`}>
        <a className={`${styles.Nav} ${styles.BackUp}`} href="#landing"><div className={styles.Arrow}></div><br />Go back</a>

        <div className={styles.Split}>
            <div className={styles.Bio}>
                <p>Hi, my name is George Beers and I'm a Manchester-based freelance web developer and designer. I work primarily with React, and specialise in static websites. I have experience with backend development and am fluent in a variety of languages including but not limited to C, Rust, Go, and Haskell.</p>
                <br />
                <p>When not creating websites, you can find me bouldering, cooking or playing guitar. </p>
            </div>
            <img className={styles.Polaroid} src={coverPhoto} alt="George Beers looking dignified."></img>
        </div>

        <a className={`${styles.Nav} ${styles.SeeMore}`} href="#projects">See my work<br /><div className={styles.Arrow}></div></a>
    </Section>;
}