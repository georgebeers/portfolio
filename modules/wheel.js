import React from "react";

import styles from "../public/css/Wheel.module.css";

export default function Wheel({ className = "", items = [], maxRotations = 0, interval = 1000 }) {
    const [current, setCurrent] = React.useState(0);
    const [rotations, setRotations] = React.useState(0);

    const [width, setWidth] = React.useState(60);
    const ref = React.createRef();

    const next = current === items.length - 1 ? 0 : current + 1;
    const prev = current === 0 ? items.length - 1: current - 1;

    React.useEffect(() => {
        const id = setInterval(() => {
            setCurrent(current => current === items.length - 1 ? 0 : current + 1);
            if (maxRotations !== 0) {
                setRotations(rotations => {
                    if (rotations === maxRotations - 1) {
                        clearInterval(id);
                        return 0;
                    } else {
                        return rotations + 1;
                    }
                });
            }
        }, interval);

        return () => clearInterval(id);
    }, []);

    React.useEffect(() => {
        setWidth(ref.current.querySelector(`.${styles.current}`).offsetWidth);
    }, [current]);

    return <div ref={ref} className={`${styles.Wheel} ${className}`} style={{ width: width }}>
        {items.map((content, i) => {
            let classes = styles.other;

            if (i === prev) {
                classes = styles.previous;
            } else if (i === current) {
                classes = styles.current;
            } else if (i === next) {
                classes = styles.next;
            }

            return <p key={i} className={`${styles.Item} ${classes}`}>{content}</p>;
        })}
    </div>;
}