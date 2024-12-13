import { lazy, useState, startTransition } from "react";

import closeFolder from "./images/svg/file-folder.svg";
import openFolder from "./images/svg/open-file-folder.svg";

const FloatingMenu = lazy(() => import('./FloatingMenu'));

export function FolderButton() {

    const [btnImage, setBtnImage] = useState(closeFolder);
    const [btnAlt, setBtnAlt] = useState('closed folder');

    function handleClick() {
        startTransition(() => {
            if(btnAlt.includes('closed')) {
                setBtnImage(openFolder);
                setBtnAlt('opened folder');
            } else {
                setBtnImage(closeFolder);
                setBtnAlt('closed folder');
            }
        });
    }

    return (
        <>
            {btnAlt.includes('opened') && <FloatingMenu />}
            <button type="button" aria-label="Choose what to do" id="btn-whatodo" onClick={handleClick}>
                <img src={btnImage} alt={btnAlt} />
            </button>
        </>
    );
}