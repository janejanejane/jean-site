import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import chroma from "chroma-js";

import handWave from "../images/svg/hand-wave.svg";
import pointDown from "../images/svg/point-down.svg";

import FloatingMenu from "../components/FloatingMenu";

 // register the hook useGSAP to avoid React version discrepancies 
 gsap.registerPlugin(useGSAP, ScrollTrigger);

 export function Intro() {
    const menuRef = useRef(null);

    useGSAP(() => {
        const intros = gsap.utils.toArray('.intro');

        const section = gsap.utils.toArray('.section');

        const generateColor = (index) => {
            // Gradually decrease hue from 60° to 53.33° (over all sections)
            const hue = 60 - (index * (60 - 53.33)) / (section.length - 1);
            
            // Gradually increase lightness from 80% to 85% (over all sections) / 100 to make value between 0 - 1
            const lightness = (80 + (index * (85 - 80)) / (section.length - 1)) / 100;

            // Fully saturated color
            const saturation = 1;

            // Hue: A value between 0 and 360 degrees.
            // Saturation: A value between 0 and 1 (not %).
            // Lightness: A value between 0 and 1 (not %).
            const hslValue = chroma.hsl(hue, saturation, lightness);

            return hslValue.hex();
        };

        gsap.from('.welcome', {
            scale: 3,
            opacity: 0.2,
            duration: 1,
            ease: 'power4.out'
        });

        intros.forEach((intro, index) => {
            gsap.from(intro, {
                opacity: 0.2,
                duration: 3,
                ease: 'power4.out',
                x: index % 2 === 0 ? '-100vw' : '100vw',
                scrollTrigger: {
                    trigger: intro,
                    start: 'top 75%',
                    end: 'top 50%',
                    scrub: 0.5,
                    invalidateOnRefresh: true,
                    // markers: true,
                }
            });
        });

        section.forEach((sec, index) => {
            gsap.to(sec, {
                backgroundColor: generateColor(index),
                scrollTrigger: {
                    trigger: sec, 
                    start: "top 99%", 
                    end: "bottom 80%", 
                    scrub: true, 
                    invalidateOnRefresh: true,
                }
            });
        });

        if(menuRef.current) {
            gsap.fromTo(
                menuRef.current,
                {
                    scale: 2,
                },
                {
                    scale: 1,
                    ease: 'power4.out', 
                    scrollTrigger: {
                        trigger: menuRef.current,
                        start: "top 99%", 
                        end: "bottom 99%", 
                        scrub: true,
                        invalidateOnRefresh: true,
                        // markers: true
                    }
                }
            );
        }
    }, [menuRef.current]);

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
                    <p>It grabs zen quotes...</p>
                </div>
            </div>
            <div className="section">
                <div className="intro">
                    <p>and jokes from open sources.</p>
                </div>
            </div>
            <div className="section">
                <div className="intro">
                    <p>After fetching,</p>
                </div>
            </div>
            <div className="section">
                <div className="intro">
                    <p>your browser stores 50 zen quotes and 250 jokes,</p>
                </div>
            </div>
            <div className="section">
                <div className="intro">
                    <p>depending on the button clicked.</p>
                </div>
            </div>
            <div className="section">
                <div className="intro">
                    <p>These remain accessible offline.</p>
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
            <FloatingMenu ref={menuRef} />
        </>
    );
}
