import { forwardRef } from "react";
import { useMenuContext } from "../contexts/MenuContext";

const FloatingMenu = forwardRef(({ onLinkClick, onVisibilityChange }, ref) => {
    const { onMenuChange } = useMenuContext();

    const handleClick = (e, section, url, options) => {
        e.preventDefault();

        onVisibilityChange(false);
        onMenuChange(url, options); // defined in MenuContext.js
        onLinkClick(section); // defined in parent component App.js
    };

    return (
        <div id="menu" ref={ref}>
            <ul>
                <li><a href="#quote" onClick={(e) => handleClick(e, 'quote', '/quotes', {key: 'zenQuotes'})}>Want a Zen Quote?</a></li>
            </ul>
        </div>
    );
});

export default FloatingMenu;