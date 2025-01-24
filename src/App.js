import { useEffect, useState } from "react";
import { ContentSection } from "./components/ContentSection";
import { FolderButton } from "./components/FolderButton";
import { Footer } from "./components/Footer";
import { MenuProvider } from "./contexts/MenuContext";

export function App() {
    const [currentSection, setCurrentSection] = useState('intro');
    const [style, setStyle] = useState({
        position: 'relative'
    });

    const handleLinkClick = (section) => {
        setCurrentSection(section); // keep track of what is shown
    };

    useEffect(() => {
        if(currentSection != 'intro') {
            setStyle({
                ...style,
                position: 'fixed',
                left: 0,
                bottom: 0
            });
        }
    }, [currentSection]);

    return (
        <MenuProvider>
            <main className="main">
                <ContentSection currentSection={currentSection} />
                <FolderButton style={style} onLinkClick={handleLinkClick} />
                <Footer />
            </main>
        </MenuProvider>
    );
}
