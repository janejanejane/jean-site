import { useEffect, useState } from "react";
import { ContentSection } from "./components/ContentSection";
import { FolderButton } from "./components/FolderButton";
import { Footer } from "./components/Footer";
import { MenuProvider } from "./contexts/MenuContext";

export function App() {
    const [currentSection, setCurrentSection] = useState('intro');
    const [loading, setLoading] = useState(true);
    const [style, setStyle] = useState({
        position: 'relative'
    });

    const handleLinkClick = (section) => {
        setCurrentSection(section); // keep track of what is shown
    };

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);

            if(currentSection != 'intro') {
                setStyle({
                    ...style,
                    position: 'fixed',
                    left: 0,
                    bottom: 0
                });
            }

        }, 3000);
    }, [currentSection]);

    return (
        <MenuProvider>
            {/* Loading Screen */}
            {loading && <div className="loading-screen">
                <div className="spinner"></div>
            </div>}
            
            {/* Main Content */}
            {!loading && <main className="main">
                <ContentSection currentSection={currentSection} />
                <FolderButton style={style} onLinkClick={handleLinkClick} />
                <Footer />
            </main>}
        </MenuProvider>
    );
}
