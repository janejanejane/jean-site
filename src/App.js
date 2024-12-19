import { ContentSection } from "./ContentSection";
import { FolderButton } from "./FolderButton";
import { Footer } from "./Footer";
import { useState } from "react";

export function App() {
    const [currentSection, setCurrentSection] = useState('intro');
    const [apiData, setApiData] = useState(null);

    const handleLinkClick = (section, apiData) => {
        setCurrentSection(section); // keep track of what is shown
        setApiData(apiData); // set the data to show in section
    };

    return (
        <main className="main">
            <ContentSection currentSection={currentSection} apiData={apiData} />
            <FolderButton onLinkClick={handleLinkClick} />
            <Footer />
        </main>
    );
}
