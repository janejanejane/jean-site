export function Basics({ resume }) {

    const basics = resume.basics;
    const location = basics.location;

    return (
        <div>
            {basics.name}
            {basics.label}
            {basics.summary}
            {location.city}
            {location.countryCode}
            {location.region}
        </div>
    )
}