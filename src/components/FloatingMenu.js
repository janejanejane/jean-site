import { forwardRef } from "react";
import { useMenuContext } from "../contexts/MenuContext";

const FloatingMenu = forwardRef(({ onLinkClick, onVisibilityChange }, ref) => {
    const { setUrlFetch, setOptionsFetch } = useMenuContext();

    const handleClick = (e, section, url, options) => {
        e.preventDefault();

        setUrlFetch(url);
        setOptionsFetch(options);
        onVisibilityChange();
        onLinkClick(section); // defined in parent component App.js
    };

    return (
        <div id="menu" ref={ref}>
            <ul>
                <li>
                    <a href="#quote" onClick={(e) => handleClick(e, 'quote', '/quotes', {key: 'zenQuotes'})}>Want a Zen Quote?</a>
                </li>
                <li>
                    <a href="#joke" onClick={(e) => handleClick(e, 'joke', '/jokes', {key: 'jokes'})}>Got room for a joke?</a>
                </li>
            </ul>
        </div>
    );
});

export default FloatingMenu;