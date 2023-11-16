import React from "react";
import TextField from '@mui/material/TextField';

function Login () {
    return (
        <form>
            <div>
                <TextField
                    id="identifierr"
                    label="username"
                    type="text"
                    name="identifier"
                />
            </div>
                        <div>
                <TextField
                    id="password"
                    label="passwd"
                    type="text"
                    name="password"
                />
            </div>
        </form>
    )
}

export default Login;