export const Joke = ({ apiData }) => {
    if(!apiData) return;

    return (
        <div className="section">
            <article className="joke">
                <p className="setup">{apiData.value.setup}</p>
                <p className="punchline">{apiData.value.punchline}</p>
            </article>
            <small>Jokes provided by <a href="https://github.com/15Dkatz/official_joke_api" target="_blank">Official Joke API!</a></small>
        </div>
    );
}