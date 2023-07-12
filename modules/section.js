import React from "react";

import styles from "../public/css/Section.module.css";

export default function Section({ innerRef, className = "", id, children }) {
    return <div ref={innerRef} id={id} className={`${styles.Section} ${className}`}>
        {children}
    </div>;
}