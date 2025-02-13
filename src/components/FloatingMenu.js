import { forwardRef } from "react";
import { useMenuContext } from "../contexts/MenuContext";

const FloatingMenu = forwardRef(({ onLinkClick }, ref) => {
    const { setUrlFetch, setOptionsFetch } = useMenuContext();

    const handleClick = (e, section, url, options) => {
        e.preventDefault();

        setUrlFetch(url);
        setOptionsFetch(options);
        onLinkClick(section);
    };

    return (
        <div className="menu" ref={ref}>
            <ul>
                <li>
                    <a href="#quote" onClick={(e) => handleClick(e, 'quote', '/quotes', {key: 'zenQuotes'})}>Get Zen Quote.</a>
                </li>
                <li>
                    <a href="#joke" onClick={(e) => handleClick(e, 'joke', '/jokes', {key: 'jokes'})}>Gimme a joke!</a>
                </li>
            </ul>
        </div>
    );
});

export default FloatingMenu;