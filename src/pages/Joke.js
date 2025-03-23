import { useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen";
import FloatingMenu from "../components/FloatingMenu";
import ItemStats from "../components/ItemStats";
import { useMenuContext } from "../contexts/MenuContext";

export const Joke = () => {
    const { data } = useMenuContext();
    const [showPunchline, setShowPunchline] = useState(false);

    if(!data) {
        return (
            <LoadingScreen></LoadingScreen>
        );
    };

    const handleClick = () => {
        setShowPunchline(true);
    };

    return (
        <>
            <div className="section">
                <article className="joke">
                    <p className="setup">{data.value.setup}</p>
                    {showPunchline && <p className="punchline">{data.value.punchline}</p>}
                    {!showPunchline && <button onClick={handleClick}>Tell me!</button>}
                </article>
                <small>Jokes provided by <a href="https://github.com/15Dkatz/official_joke_api" target="_blank">Official Joke API!</a></small>
            </div>
            <FloatingMenu className="in-page" />
            <ItemStats />
        </>
    );
}