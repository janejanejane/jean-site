import { Intro } from "./Intro";
import { Quote } from "./Quote";

export const ContentSection = ({ currentSection, apiData }) => {
    return (
        <div className="content">
            { (currentSection === 'intro' || !apiData) && <Intro /> }
            { currentSection === 'quote' && <Quote apiData={apiData} /> }
            { currentSection === 'joke' && <div>Joke: </div> }
        </div>
    );
};