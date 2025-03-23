import { LoadingScreen } from "../components/LoadingScreen";
import FloatingMenu from "../components/FloatingMenu";
import ItemStats from "../components/ItemStats";
import { useMenuContext } from "../contexts/MenuContext";

export const Quote = () => {
    const { data } = useMenuContext();

    if(!data) {
        return (
            <LoadingScreen></LoadingScreen>
        );
    };

    return (
        <>
            <div className="section">
                <blockquote className="quote">
                    <p>{data.value.q}</p>
                    <footer>
                        — <cite>{data.value.a}</cite>
                    </footer>
                </blockquote>
                <small>Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a></small>
            </div>
            <FloatingMenu className="in-page" />
            <ItemStats />
        </>
    );
}