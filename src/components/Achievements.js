export function Achievements({ achievements }) {

    if(!achievements) {
        return;
    }


    return (
        <>
            {/* <h5>Key achievements:</h5> */}
            <ul>
                {achievements.map((value) => {
                    const itemKey = value.replaceAll(' ', '').slice(0, 15); // Make a long string then get 15 characters for each achievement.

                    return <li key={itemKey}>{value}</li>;
                })}
            </ul>
        </>
    );
}