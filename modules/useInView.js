import React from "react";

export default function useInView(ref, threshold) {
    const [isVisible, setState] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setState(entry.isIntersecting);
        }, { root: document.getElementById("root"), threshold: threshold });

        ref.current && observer.observe(ref.current);

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return isVisible;
}