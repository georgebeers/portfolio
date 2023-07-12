import React from "react";

import styles from "../public/css/Title.module.css";

export default function Title({ color, small = false }) {
    return <h1 className={`${styles.Title} ${small ? styles.small : ""}`} style={{ color: color, borderColor: color }}>
        <span>George</span><br /><span>Beers</span>
    </h1>;
}