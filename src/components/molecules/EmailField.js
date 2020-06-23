import React, { useState } from 'react'
import TextField from '../atoms/RTextField'

function NameField() {
    const [helperText, setHelperText] = useState('')
    const [error, setError] = useState(false)

    const onChange = (event) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)) {
            setError(false);
            setHelperText("")
        }
        else {
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
                label={"Email"}
            />
        </div>
    )
}

export default NameField
