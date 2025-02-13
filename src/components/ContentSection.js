import { LoadingScreen } from "./LoadingScreen";
import { Intro } from "../pages/Intro";
import { Quote } from "../pages/Quote";
import { Joke } from "../pages/Joke";
import { useMenuContext } from "../contexts/MenuContext";

export const ContentSection = () => {
    const { currentSection, setCurrentSection, data, loading, error } = useMenuContext();

    if(loading) {
        return (
            <LoadingScreen></LoadingScreen>
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
            { (currentSection === 'intro' || !data) && <Intro setCurrentSection={setCurrentSection} /> }
            { currentSection === 'quote' && <Quote apiData={data} /> }
            { currentSection === 'joke' && <Joke apiData={data} /> }
        </div>
    );
};