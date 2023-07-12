import React from "react";

import Section from "./section";
import Landing from "./landing";
import About from "./about";
import Projects from "./projects";
import Title from "./title";
import Noise from "./noise";

export default function App() {
    const [showRest, setShowRest] = React.useState(false);
    const root = document.getElementById("root");

    const [pageNo, setPageNo] = React.useState(0);

    const scrollHandler = () => {
        setPageNo(Math.floor((root.scrollTop + (root.offsetHeight / 2)) / root.offsetHeight));
    };

    React.useEffect(() => {
        const id = setTimeout(() => setShowRest(true), 5000);
        root.addEventListener("scroll", scrollHandler);

        return () => { 
            clearTimeout(id);
            root.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return <>
        <Title color={pageNo === 1 ? "#1e1a1d" : "#d8cfaf"} small={pageNo !== 0} />
        <Landing />

        {showRest ? <>
            <About />
            <Projects />
        </> : <></>}

        <Noise />
    </>;
}