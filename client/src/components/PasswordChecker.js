import React, {useState} from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import SendIcon from '@mui/icons-material/Send';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {Button, Fade, LinearProgress, TextField, Typography} from "@mui/material";

export default function PasswordChecker() {
    const [password, setPassword] = useState("");
    const [rating, setRating] = useState("");
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async () => {
        if (password.length > 0) {
            try {
                setLoading(true);
                const response = await axios.post("http://localhost:5000/check",{
                    "password": password
                })
                console.log(response.data.toString());
                setRating(response.data["rating"]);
            } catch(error) {
                setRating("Failed to submit password");
            }
            setLoading(false)
        }
    }

    const handleOnKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSubmit();
        }
    }

    return(
        <Box className="password-checker-box">
            <Box className="input-row">
                <TextField className="password-checker-text-field" id="outlined-basic" label="Enter a password" variant="outlined" onChange={handleInputChange} onKeyDown={handleOnKeyDown}>
                </TextField>
                <Button className="password-checker-submit" variant="contained" onClick={handleSubmit}>
                    <ArrowUpwardIcon />
                </Button>
            </Box>
            {
                (loading) ?
                    <Box className="progress-box" sx={{ width: '50%' }}>
                        <Fade in={loading}>
                            <LinearProgress className="progress-bar" />
                        </Fade>
                    </Box>
                    :
                    <Box className={"null-box"}>

                    </Box>
            }
            <Box className="strength-box">
                <Typography className={"strength-header"} variant="h2">
                    Strength:
                </Typography>
                <Typography className={"strength-rating"} variant="h3">
                    {rating}
                </Typography>
            </Box>
        </Box>
    );
}