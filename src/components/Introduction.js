import handWave from "url:../images/svg/hand-wave.svg";

export function Introduction() {
    return (
        <div className="profile-overview__intro">
            <p>Hi! Kumusta?
                <span className="waving-hand">
                    <img src={handWave} alt="hand waving" />
                </span>
            </p>
            <p></p>
            <p>I'm Jean, a Filipino with a permanent residence in New Zealand.</p>
            <p>I’ve worked in software development for around 10 years. My work experience has mainly been on front-end web development. I have also done server-side development using Ruby on Rails, PHP, JavaScript, MySQL, and s3, to name a few.</p>
            <p>I’m comfortable figuring out legacy applications and adding features to it. Most of my entry tasks have been this way.</p>
            <p>Currently, I am on a career break to focus on my kids’ wellbeing.</p>
            <p>Please have a look at my employment history below, before I took this hiatus.</p>
        </div>
    )
}