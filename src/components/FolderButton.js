import { lazy, useState, useEffect, useRef } from "react";

import closeFolder from "../images/svg/file-folder.svg";
import openFolder from "../images/svg/open-file-folder.svg";

const FloatingMenu = lazy(() => import('./FloatingMenu'));

export const FolderButton = ({ onLinkClick }) => {

    const [btnImage, setBtnImage] = useState(closeFolder);
    const [btnAlt, setBtnAlt] = useState('closed folder');
    const [menuVisible, setMenuVisible] = useState(false); // <FloatingMenu /> visibility state

    const btnRef = useRef(null);
    const menuRef = useRef(null);

    function handleClick() {
        setMenuVisible((value) => {
            if(!value) {
                setBtnImage(openFolder);
                setBtnAlt('opened folder');
            } else {
                setBtnImage(closeFolder);
                setBtnAlt('closed folder');
            }

            return !value;
        });
    }

    function handleClickOutside(e) {
        if(btnRef.current && !btnRef.current.contains(e.target) &&
            menuRef.current && !menuRef.current.contains(e.target)) {

            handleClick();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className="options">
            <button 
                type="button" 
                aria-label="Choose what to do" 
                id="btn-whatodo" 
                onClick={handleClick}
                ref={btnRef}
            >
                <img src={btnImage} alt={btnAlt} />
            </button>
            {menuVisible && 
                <FloatingMenu 
                    onLinkClick={onLinkClick}  /** method is defined in parent component App.js */
                    onVisibilityChange={handleClick} 
                    ref={menuRef}
                />}
        </div>
    );
}