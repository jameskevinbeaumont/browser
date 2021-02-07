import React, { useState } from 'react';
//import { NestedList } from "../components";
import CustomizedTreeView from "../components/CustomizedTreeView";

function BrowserModal({ handleCancel, handleOK, show, fileName, setFileName }) {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const [fileSelected, setFileSelected] = useState('');
    const [okStatus, setOkStatus] = useState(true);

    const assignFile = (newFile) => {
        if (newFile === "") {
            setOkStatus(true);
        } else {
            setOkStatus(false);
        }
        setFileSelected(newFile);
    };

    const commitFile = () => {
        setFileName(fileSelected);
        handleOK(fileName);
    };

    const abandonFile = () => {
        setFileSelected('');
        setFileName('');
        setOkStatus(true);
        handleCancel();
    };

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="modal-main__container">
                    <CustomizedTreeView handleFile={assignFile} />
                    <div className="modal-main__buttons">
                        <button className="modal-main__buttons-button"
                            id="okBtn" onClick={() => commitFile()} disabled={okStatus}>ok
                        </button>
                        <button className="modal-main__buttons-button modal-main__buttons-button"
                            id="cancelBtn" onClick={abandonFile}>cancel
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BrowserModal;