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
                work.map((value, index) => {
                    const start = formatter.format(new Date(value.startDate));
                    const end = value.endDate === 'Present' ? 'present' : formatter.format(new Date(value.endDate));
                    const achievements = value.achievements;

                    JSON.stringify(achievements);

                    // {achievements.map((v, i) => {
                    //     return (
                    //         <ul>
                    //             <li key={i}>{v}</li>
                    //         </ul>
                    //     );
                    // })}

                    return (
                        <li key={index}>
                            <p className="work__list-info1"><span>{value.position}</span><span>{start} &mdash; {end}</span></p>
                            <p className="work__list-info2"><span>{value.name}</span><span>{value.location}</span></p>
                            <small className="work__list-info3">{value.description}</small>
                            {value.summary && <small className="work__list-info4">[{value.summary}]</small>}
                        </li>
                    );
                })
            }
            </ul>
        </section>
    )
}