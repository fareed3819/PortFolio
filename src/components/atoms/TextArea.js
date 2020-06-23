import React from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

function TextArea() {
    return (
        <div>
            <TextareaAutosize style={{ width: 300 }} aria-label="minimum height" rowsMin={10} placeholder="Message" />
        </div>
    )
}

export default TextArea
