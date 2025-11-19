import handWave from "url:../images/svg/hand-wave.svg";
import nzFlag from "url:../images/svg/nz-flag.svg";
import phFlag from "url:../images/svg/ph-flag.svg";

export function Introduction() {
    return (
        <div className="profile-overview__intro">
            <p>Hi! Kumusta?
                <span className="waving-hand">
                    <img src={handWave} alt="hand waving" />
                </span>
            </p>
            <p></p>
            <p>I'm Jean, a Filipino, living in New Zealand.
                <span className="flag">
                    <img src={phFlag} alt="PH flag" />
                </span>
                <span className="flag">
                    <img src={nzFlag} alt="NZ flag" />
                </span>
            </p>
            <p>I’m an experienced software developer. My professional background is mostly on front-end web development. But I've also done server-side development using Ruby on Rails, PHP, JavaScript, and MySQL, to name a few.</p>
            <p>I’m comfortable figuring out legacy applications and adding features to it. Most of my initial assignments in companies have been this way.</p>
            <p>Right now, I'm on a career break to focus on my children.</p>
            <p>If you want to know more about my employment history, please have a read below.</p>
            <p>And thank you for your time!
                <span className="waving-hand">
                    <img src={handWave} alt="hand waving" />
                </span>
            </p>
        </div>
    )
}