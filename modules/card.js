import React from "react";

import styles from "../public/css/Card.module.css";

export default function Card({ title, year, url, src, description }) {
    const [opened, setOpened] = React.useState(false);

    return <div onClick={() => setOpened(!opened)} className={`${styles.Card} ${opened ? styles.opened : ""}`}>
        <h2>{title} <span>{year}</span></h2>
        <a target="_blank" href={url}>
            <img src={src} alt={`Screenshot of ${title}`}></img>
            <span>Visit {title}</span>
        </a>
        <p>{description}</p>
    </div>;
}