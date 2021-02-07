import React, { useState } from 'react';
import { BrowserModal } from "../components";

function Browser({ fileHistory, setFileHistory }) {
    const [uploadStatus, setUploadStatus] = useState(true);
    const [progressStatus, setProgressStatus] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [show, setShow] = useState(false);
    const [fileName, setFileName] = useState('');
    const uploadMessage = 'Upload complete!';

    const showModal = () => {
        document.body.style.overflow = "hidden";
        setFileName('');
        setShow(true);
    };

    const hideModal = () => {
        document.body.style.overflow = "visible";
        setShow(false);
    };

    const loadFilename = () => {
        setUploadStatus(false);
        setShow(false);
        setShowMessage(false);
        setProgressStatus(false);
    };

    const showProgress = () => {
        setProgressStatus(true);
        setTimeout(finishUpload, 5000);
    };

    const finishUpload = () => {
        setUploadStatus(true);
        setShowMessage(true);
        setFileHistory(fileHistory => [...fileHistory, fileName]);
    };

    return (
        <div className="browser">
            <div className="browser__file">
                <div className="browser__file-label">file:</div>
                <div className="browser__file-name">{fileName}</div>
                <button className="browser__button" id="browse-button" onClick={showModal}>browse</button>
            </div>
            <div className="browser__upload">
                <button
                    className="browser__button"
                    id="upload-button"
                    onClick={showProgress}
                    disabled={uploadStatus}>upload</button>
            </div>
            <div className="browser__progress">
                <div className="progress progress-green" style={{ display: progressStatus ? 'flex' : 'none' }}>
                    <div className="progress-bar">
                    </div>
                </div>
                <div className="message" style={{ display: showMessage ? 'flex' : 'none' }}>{uploadMessage}</div>
            </div>
            <BrowserModal
                handleCancel={hideModal}
                handleOK={loadFilename}
                show={show}
                fileName={fileName}
                setFileName={setFileName}
            ></BrowserModal>
        </div >
    )
};

export default Browser;