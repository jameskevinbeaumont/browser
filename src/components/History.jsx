import React, { useState } from 'react';

function History({ fileHistory, setFileHistory }) {
    const clearHistory = () => {
        setFileHistory([]);
    };

    return (
        <div className="history">
            <button
                className="browser__button"
                id="clear-button"
                onClick={clearHistory}>clear</button>
            <ul>
                {
                    fileHistory.map((item) =>
                        <li key={item.id}>{item.filename}</li>
                    )
                }
            </ul>
        </div>
    )
};

export default History;