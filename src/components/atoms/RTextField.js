import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'

function RTextField(props) {

    return (
        <div>
            <TextField
                style={{ width: 300 }}

                margin="dense"
                helperText={props.helperText}
                onChange={props.onChange}
                error={props.error}
                required
                id="outlined-required"
                label={props.label}
            />
        </div>
    )
}

export default RTextField
