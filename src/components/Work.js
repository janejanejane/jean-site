import { Achievements } from "./Achievements";
import { Projects } from "./Projects";

export function Work({ resume }) {

    const work = resume.work;

    const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short'
    });
    
    return (
        <section className="work">
            <h3>Work Experience</h3>
            <ul className="work__list">
            {
                work.map((value) => {
                    const start = formatter.format(new Date(value.startDate));
                    const end = value.endDate === 'Present' ? 'present' : formatter.format(new Date(value.endDate));

                    return (
                        <li key={value.id}>
                            <p className="work__list-position"><span>{value.position}</span><span>{start} &mdash; {end}</span></p>
                            <p className="work__list-company"><span>{value.name}</span></p>
                            {value.location && <p className="work__list-location"><span>{value.location}</span></p>}
                            {value.description && <p className="work__list-description">{value.description}</p>}
                            {value.summary && <p><small className="work__list-summary">[{value.summary}]</small></p>}
                            {value.projects && <Projects projects={value.projects} />}
                            {value.achievements && <Achievements achievements={value.achievements} />}
                        </li>
                    );
                })
            }
            </ul>
        </section>
    )
}