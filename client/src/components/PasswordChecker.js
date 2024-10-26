import React, {useState} from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {Button, Chip, Fade, LinearProgress, TextField, Typography} from "@mui/material";

export default function PasswordChecker() {
    const [password, setPassword] = useState("");
    const [rating, setRating] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

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
                setSubmitted(true)
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
            <Box className="input-row">
                <TextField className="password-checker-text-field" id="outlined-basic" label="Enter a password" variant="outlined" onChange={handleInputChange} onKeyDown={handleOnKeyDown}>
                </TextField>
                <Button className="password-checker-submit" variant="contained" onClick={handleSubmit}>
                    <ArrowUpwardIcon />
                </Button>
            </Box>
            <Box className="strength-box">
                {
                    (submitted) ?
                        <Typography className={"strength-header"} variant="h2">
                            Strength:
                        </Typography>
                        :
                        <Box className={"null-box"} />
                }
                {
                    (loading || rating === "") ?
                        <Box className={"null-box"}>
                        </Box>
                        :
                        <Chip className={"strength-rating"} label={rating} color={"primary"} variant="outlined" />
                }
            </Box>
        </Box>
    );
}