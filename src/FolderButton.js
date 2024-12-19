import { lazy, useState, startTransition } from "react";

import closeFolder from "./images/svg/file-folder.svg";
import openFolder from "./images/svg/open-file-folder.svg";

const FloatingMenu = lazy(() => import('./FloatingMenu'));

export const FolderButton = ({ onLinkClick }) => {

    const [btnImage, setBtnImage] = useState(closeFolder);
    const [btnAlt, setBtnAlt] = useState('closed folder');
    const [menuVisibility, setMenuVisibility] = useState(true); // <FloatingMenu /> visibility state

    function handleClick() {
        startTransition(() => {
            if(btnAlt.includes('closed') || !menuVisibility) {
                setBtnImage(openFolder);
                setBtnAlt('opened folder');
            } else {
                setBtnImage(closeFolder);
                setBtnAlt('closed folder');
            }
        });
    }

    function handleVisibilityChange(isVisible) {
        setMenuVisibility(isVisible);
        handleClick(); // call the function to set the image
    }

    return (
        <>
            {btnAlt.includes('opened') && 
                <FloatingMenu 
                    onLinkClick={onLinkClick}  /** method is defined in parent component App.js */
                    onVisibilityChange={handleVisibilityChange} 
                />}
            <button type="button" aria-label="Choose what to do" id="btn-whatodo" onClick={handleClick}>
                <img src={btnImage} alt={btnAlt} />
            </button>
        </>
    );
}