import caricature from "url:../images/light-img.png";

export function Profile() {
    return (
        <img 
            className="profile-pic"
            src={caricature} 
            alt="jean-caricature"
        />
    )
}