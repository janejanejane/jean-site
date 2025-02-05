import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import handWave from "../images/svg/hand-wave.svg";
import pointDown from "../images/svg/point-down.svg";

 // register the hook useGSAP to avoid React version discrepancies 
 gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Intro() {
    useGSAP(() => {
        const intros = gsap.utils.toArray('.intro');

        gsap.from('.welcome', {
            scale: 3,
            opacity: 0.2,
            duration: 1,
            ease: 'power4.out'
        })

        intros.forEach((intro, index) => {
            gsap.from(
                intro, // target
                {
                    opacity: 0.2, // toVars
                    duration: 3,
                    ease: 'power4.out',
                    x: index % 2 === 0 ? '-100vw' : '100vw',
                    scrollTrigger: {
                        trigger: intro,
                        start: 'top 75%',
                        end: 'top 50%',
                        scrub: 0.5,
                        // markers: true,
                    }
                }
            )
        });


        const section = gsap.utils.toArray('.section');

        const generateColor = (index) => {
            const lightness = 82 +index * 3;
            return `hsl(53, 100%, ${lightness}%)`;
        };
        
        section.forEach((sec, index) => {
            gsap.to(sec, {
                backgroundColor: generateColor(index),
                scrollTrigger: {
                    trigger: sec, 
                    start: "top 99%", 
                    end: "bottom 80%", 
                    scrub: true, 
                  },
            });
        });
    });

    return (
        <>
            <div className="section">
                <div className="welcome">
                    <div>
                        <p>Welcome Visitor!</p>
                    </div>
                    <div className="scroll-prompt">
                        <p>Scroll Down</p>
                        <div className="arrow-down"></div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="intro">
                    <div>
                        <p>Hello!
                            <span className="waving-hand">
                                <img src={handWave} alt="hand waving" />
                            </span>
                        </p>
                    </div>
                    <div>
                        <p>I'm Jean.</p>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="intro">
                    <p>A Software Developer.</p>
                </div>
            </div>
            <div className="section">
                <div className="intro">
                    <p>I've set up an API fetcher here.</p>
                </div>
            </div>
            <div className="section">
                <div className="intro">
                    <p>It grab jokes...</p>
                </div>
            </div>
            <div className="section">
                <div className="intro">
                    <p>and quotes from open sources.</p>
                </div>
            </div>
            <div className="section">
                <div className="intro">
                    <p>Wanna see it in action?</p>
                </div>
            </div>
            <div className="section">
                <div className="intro">
                    <p>Click below 
                        <span className="point-down-hand">
                            <img src={pointDown} alt="pointing down" />
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}
