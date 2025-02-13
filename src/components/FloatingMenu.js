import { forwardRef } from "react";
import { useMenuContext } from "../contexts/MenuContext";

const FloatingMenu = forwardRef(({}, ref) => {
    const { setCurrentSection, setUrlFetch, setOptionsFetch } = useMenuContext();

    const onLinkClick = (section) => {
        setCurrentSection(section); // keep track of what is shown
    };

    const handleClick = (e, section, url, options) => {
        e.preventDefault();

        setUrlFetch(url);
        setOptionsFetch(options);
        onLinkClick(section);
    };

    return (
        <div className="menu" ref={ref}>
            <ul>
                <li onClick={(e) => handleClick(e, 'quote', '/quotes', {key: 'zenQuotes'})}>
                    <a href="#quote">Get Zen Quote.</a>
                </li>
                <li onClick={(e) => handleClick(e, 'joke', '/jokes', {key: 'jokes'})}>
                    <a href="#joke">Gimme a joke!</a>
                </li>
            </ul>
        </div>
    );
});

export default FloatingMenu;