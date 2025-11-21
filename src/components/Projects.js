import { Achievements } from "./Achievements";

export function Projects({ projects }) {

    if(!projects) {
        return;
    }

    return (
        <>
            {/* <h5>Projects:</h5> */}
            <ul>
                {projects.map((value) => {
                    return (
                        <li key={value.id}>
                            {value.name}
                            <Achievements achievements={value.achievements} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}