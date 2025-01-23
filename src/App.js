import { useState } from "react";
import { ContentSection } from "./components/ContentSection";
import { FolderButton } from "./components/FolderButton";
import { Footer } from "./components/Footer";
import { MenuProvider } from "./contexts/MenuContext";

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
