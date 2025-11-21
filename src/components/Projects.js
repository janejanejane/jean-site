import { Achievements } from "./Achievements";

export function Projects({ projects }) {

    JSON.stringify(projects);
    if(!projects) {
        return;
    }

    return (
        <>
            {/* <h5>Projects:</h5> */}
            <ul>
                {projects.map((value) => {
                    console.log('this is value:', value);
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