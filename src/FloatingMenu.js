import { useState } from "react";
import { useFetch } from "./hooks/useFetch";


const FloatingMenu = ({ onLinkClick, onVisibilityChange }) => {
    const {data, loading, error} = useFetch('/quotes');
    const [isVisible, setIsVisible] = useState(true);

    function handleClick(e, section, data) {
        e.preventDefault();

        setIsVisible(false);
        onVisibilityChange(isVisible);

        onLinkClick(section, data); // defined in parent component App.js
    };

    return (
        <div id="menu">
            <ul>
                {isVisible && <li><a href="#quote" onClick={(e) => handleClick(e, 'quote', data)}>Want a Zen Quote?</a></li>}
            </ul>
        </div>
    );
};

export default FloatingMenu;