import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import handWave from "../images/svg/hand-wave.svg";

 // register the hook useGSAP to avoid React version discrepancies 
 gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Intro() {
    useGSAP(() => {
        const intros = gsap.utils.toArray('.intro');

        intros.forEach((intro) => {
            gsap.fromTo(
                intro, // target
                {
                    scale: 2, // fromVars
                    opacity: 0.2,
                },
                {
                    scale: 1, // toVars
                    opacity: 1,
                    duration: 2,
                    scrollTrigger: {
                        trigger: intro,
                        start: "top 75%",
                        end: "top 20%",
                        scrub: 0.5,
                        // markers: true,
                    }
                }
            )
        });
    });

    return (
        <>
            <div className="section">
                <div className="hero-image">
                    <small>
                        <p>Photo by <a href="https://unsplash.com/@mitchel3uo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mitchell Luo</a> on <a href="https://unsplash.com/photos/black-and-white-striped-textile-FWoq_ldWlNQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p>
                    </small>
                    <div className="scroll-text">
                        Scroll Down
                        <div className="arrow-down"></div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="intro">
                    <div>Hello!
                        <div className="waving-hand">
                            <img src={handWave} alt="hand waving" />
                        </div>
                    </div>
                    <div>I'm Jean.</div>
                </div>
            </div>
            <div className="section">
                <div className="intro">I'm a Software Developer.</div>
            </div>
            <div className="section">
                <div className="intro">Thank's for dropping by.</div>
            </div>
        </>
    );
}
