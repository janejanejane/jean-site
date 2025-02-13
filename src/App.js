import { useEffect, useState } from "react";
import { ContentSection } from "./components/ContentSection";
import { Footer } from "./components/Footer";
import { MenuProvider } from "./contexts/MenuContext";
import { LoadingScreen } from "./components/LoadingScreen";
import { useMenuContext } from "./contexts/MenuContext";

export function App() {
    const { currentSection } = useMenuContext();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [currentSection]);

    return (
        <MenuProvider>
            {/* Loading Screen */}
            {loading && <LoadingScreen></LoadingScreen>}
            
            {/* Main Content */}
            {!loading && <main className="main">
                <ContentSection />
                <Footer />
            </main>}
        </MenuProvider>
    );
}
