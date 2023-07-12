import React from "react";

import styles from "../public/css/Noise.module.css";

export default function Noise() {
    return <svg className={styles.Noise} xmlns='http://www.w3.org/2000/svg'>
        <filter id='noiseFilter'>
            <feTurbulence 
                type="fractalNoise" 
                baseFrequency="0.65"
                seed="10"
                numOctaves="3" 
                stitchTiles="stitch">
            
                <animate attributeName="seed" calcMode="linear" values="0; 10;" begin="0s" dur="0.5s" repeatCount="indefinite"/>
            </feTurbulence>
        </filter>

        <rect width='100%' height='100%' filter='url(#noiseFilter)' />
    </svg>;
}