import handWave from "./images/svg/hand-wave.svg";

export function Intro() {
    return (
        <>
            <div className="section intro">
                <div>Hello!
                    <div className="waving-hand">
                        <img src={handWave} alt="hand waving" />
                    </div>
                </div>
                <div>I'm Jean.</div>
            </div>
            <div className="section intro">I write code.</div>
            <div className="section intro">Thank's for dropping by.</div>
        </>
    );
}
