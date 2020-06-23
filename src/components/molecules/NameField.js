import React, { useState, useEffect } from 'react'
import TextField from '../atoms/RTextField'

function NameField() {
    const [helperText, setHelperText] = useState('')
    const [error, setError] = useState(false)

    const onChange = (event) => {
        if (event.target.value.length > 2) {
            setError(false);
            setHelperText("")
        } else {
            setError(true);
            setHelperText("Invalid Format")
        }
    }
    return (
        <div>
            <TextField
                helperText={helperText}
                error={error}
                onChange={onChange}
                label={"First name"}
            />
        </div>
    )
}

export default NameField
