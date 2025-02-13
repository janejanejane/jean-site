import FloatingMenu from "../components/FloatingMenu";

export const Quote = ({ apiData }) => {
    if(!apiData) return;

    return (
        <>
            <div className="section">
                <blockquote className="quote">
                    <p>{apiData.value.q}</p>
                    <footer>
                        — <cite>{apiData.value.a}</cite>
                    </footer>
                </blockquote>
                <small>Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a></small>
            </div>
            <FloatingMenu />
        </>
    );
}