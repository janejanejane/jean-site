import { Intro } from "../pages/Intro";
import { Quote } from "../pages/Quote";
import { useMenuContext } from "../contexts/MenuContext";

export const ContentSection = ({ currentSection }) => {
    const { data, loading, error } = useMenuContext();

    if(loading) {
        return (
            <div className="content">
                <div className="section">Loading...</div>
            </div>
        );
    }

    if(error) {
        return (
            <div className="content">
                <div className="section">Error: {error.message}</div>
            </div>
        );
    }

    return (
        <div className="content">
            { (currentSection === 'intro' || !data) && <Intro /> }
            { currentSection === 'quote' && <Quote apiData={data} /> }
            { currentSection === 'joke' && <div>Joke: </div> }
        </div>
    );
};