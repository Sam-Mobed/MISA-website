"use client"

import './Mountain.css';
import hafez from './images/hafez.png';
import mountain from './images/mountain.png';
import hill from './images/hill.png';
import { useEffect } from 'react';

const Mountain: React.FC = () => {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let scrollY = window.scrollY;
            document.documentElement.style.setProperty("--scrollTop", `${scrollY}px`);
        });
    }, []);

    return (
    <div className="parallax-container">
        <div className="content">
            <header className="header-main">
                <div className="layers">
                    
                    <div className="img-layer layer-base" style={{backgroundImage: `url(${hafez})`, backgroundSize: "100%",}}></div>
                    <div className="img-layer layer-mid" style={{backgroundImage: `url(${mountain})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat",}}></div>
                    <div className="img-layer layer-front" style={{backgroundImage: `url(${hill})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat",}}></div>
                </div>
            </header>
        </div>
    </div>
    );
}

export default Mountain;