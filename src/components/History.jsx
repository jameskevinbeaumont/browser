import React from 'react';

function History({ fileHistory, setFileHistory }) {
    console.log(fileHistory);
    const clearHistory = () => {

    };

    return (
        <div className="history">
            <button
                className="browser__button"
                id="clear-button"
                onClick={clearHistory}>clear</button>

        </div>
    )
};

export default History;