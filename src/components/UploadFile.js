import React, { useState } from 'react';
import { FaRegPlusSquare } from 'react-icons/fa';

const FileUploader = props => {
    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };

    return (
        <div>
            <FaRegPlusSquare onClick={handleClick} style={{ color: 'black', fontSize: '20px', cursor: 'pointer' }} />
            <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
            />
        </div>
    );
}

export default FileUploader;