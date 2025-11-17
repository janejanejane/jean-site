export function Work({ resume }) {

    const work = resume.work;

    const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short'
    });
    
    return (
        <div className="work">
            <h3>Work Experience</h3>
            <ul className="work__list">
            {
                work.map((value, index) => {
                    console.log('value:', value, 'index:', index);
                    const start = formatter.format(new Date(value.startDate));
                    const end = value.endDate === 'Present' ? 'present' : formatter.format(new Date(value.endDate));

                    return (
                        <li key={index}>
                            <p><span>{value.position}</span> | <span>{value.name}</span></p>
                            <p><small>{value.location}</small> <small>{start} &mdash; {end}</small></p>
                            <i>{value.description}</i>
                        </li>
                    );
                })
            }
            </ul>
        </div>
    )
}