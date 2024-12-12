import { lazy, useState, startTransition } from "react";

import closeFolder from "./images/svg/file-folder.svg";
import openFolder from "./images/svg/open-file-folder.svg";

const FloatingMenu = lazy(() => import('./FloatingMenu'));

export function FolderButton() {

    const [btnImage, setBtnImage] = useState(closeFolder);
    const [btnAlt, setBtnAlt] = useState('closed folder');

    function handleClick() {
        startTransition(() => {
            console.log('clicked!');
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
            {console.log(btnAlt.includes('opened'))}
            {btnAlt.includes('opened') && <FloatingMenu />}
            <button type="button" aria-label="Choose what to do" id="btn-whatodo" onClick={handleClick} className="hidden">
                <img src={btnImage} alt={btnAlt} />
            </button>
        </>
    );
}