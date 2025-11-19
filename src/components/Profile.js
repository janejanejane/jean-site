import caricature from "url:../images/light-img.png";

export function Profile() {
    return (
        <div className="profile-overview__pic">
            <img 
                src={caricature} 
                alt="jean-caricature"
            />
        </div>
    )
}