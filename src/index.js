
import openFolder from './images/svg/open-file-folder.svg';
import closeFolder from './images/svg/file-folder.svg';

const btn = document.getElementById("btn-whatodo");
const img = btn.querySelector("img");

btn.addEventListener('click', () => {
    if (img.alt.includes("closed")) {
        img.src = openFolder;
        img.alt = "opened folder";
    } else {
        img.src = closeFolder;
        img.alt = "closed folder";
    }
});
