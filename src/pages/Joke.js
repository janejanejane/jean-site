import { useState } from "react";
import FloatingMenu from "../components/FloatingMenu";

export const Joke = ({ apiData }) => {
    if(!apiData) return;
    
    const [showPunchline, setShowPunchline] = useState(false);

    const handleClick = () => {
        setShowPunchline(true);
    };

    return (
        <>
            <div className="section">
                <article className="joke">
                    <p className="setup">{apiData.value.setup}</p>
                    {showPunchline && <p className="punchline">{apiData.value.punchline}</p>}
                    {!showPunchline && <button onClick={handleClick}>Tell me!</button>}
                </article>
                <small>Jokes provided by <a href="https://github.com/15Dkatz/official_joke_api" target="_blank">Official Joke API!</a></small>
            </div>
            <FloatingMenu />
        </>
    );
}