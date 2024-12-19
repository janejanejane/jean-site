export const Quote = ({ apiData }) => {
    if(!apiData) return;

    return (
        <div>
            <blockquote className="section">
                <p>{apiData.q}</p>
                <footer>
                    — <cite>{apiData.a}</cite>
                </footer>
            </blockquote>
            <small>Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a></small>
        </div>
    );
}