import { Intro } from "../pages/Intro";
import { Quote } from "../pages/Quote";
import { useMenuContext } from "../contexts/MenuContext";

export const ContentSection = ({ currentSection }) => {
    const { data } = useMenuContext();

    console.log('Consumer re-rendered with state:', data);

    return (
        <div className="content">
            { (currentSection === 'intro' || !data) && <Intro /> }
            { currentSection === 'quote' && <Quote ata={data} /> }
            { currentSection === 'joke' && <div>Joke: </div> }
        </div>
    );
};