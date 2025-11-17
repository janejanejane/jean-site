import github from "url:../images/github.png";
import linkedin from "url:../images/linkedin.png";

export function Basics({ resume }) {

    const basics = resume.basics;
    const profiles = basics.profiles;

    return (
        <div className="profile-overview__links">
            {
                profiles.map((value, index) => {
                    const image = (value.network.toLowerCase() === 'github') ? github : linkedin;

                    return (
                        <a key={index} href={value.url} target="_blank">
                            <img src={image} alt={value.network}></img>
                        </a>
                    )
                })
            }
        </div>
    )
}