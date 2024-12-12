import handWave from "./images/svg/hand-wave.svg";

export function Intro() {
    return (
        <div className="content">
            <div className="section">
                <div>Hello!
                    <div className="waving-hand">
                        <img src={handWave} alt="hand waving" />
                    </div>
                </div>
                <div>I'm Jean.</div>
            </div>
            <div className="section">I write code.</div>
            <div className="section">Thank's for dropping by.</div>
        </div>
    );
}
