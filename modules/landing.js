import React from "react";

import useInView from "./useInView";
import Section from "./section";
import Wheel from "./wheel";
import styles from "../public/css/Landing.module.css";

export default function Landing() {
    const sectionRef = React.useRef(false);
    const inView = useInView(sectionRef, 0.5);

    return <Section innerRef={sectionRef} id="landing" className={`${styles.Landing} ${inView ? styles.inView : ""}`}>
        <div className={styles.Slider}>
            <Wheel items={["Develop", "Design", "Create", "Inspire"]} maxRotations={3} interval={900} />
            <span>with</span>
        </div>


        <a className={styles.SeeMore} href="#about">Who is George Beers?<br /><div className={styles.Arrow}></div></a>
    </Section>;
}