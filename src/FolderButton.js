import closeFolder from "./images/svg/file-folder.svg";

export function FolderButton() {
    return (
        <button type="button" aria-label="Choose what to do" id="btn-whatodo" className="hidden">
            <img src={closeFolder} alt="closed folder" />
        </button>
    );
}