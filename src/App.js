import { useState } from "react";
import { MenuProvider } from "./contexts/MenuContext";
import { ContentSection } from "./components/ContentSection";
import { FolderButton } from "./components/FolderButton";
import { Footer } from "./components/Footer";

export function App() {
    const [currentSection, setCurrentSection] = useState('intro');

    const handleLinkClick = (section) => {
        setCurrentSection(section); // keep track of what is shown
    };

    return (
        <MenuProvider>
            <main className="main">
                <ContentSection currentSection={currentSection} />
                <FolderButton onLinkClick={handleLinkClick} />
                <Footer />
            </main>
        </MenuProvider>
    );
}
