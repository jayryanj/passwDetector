import React, {useState} from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import SendIcon from '@mui/icons-material/Send';
import {Button, TextField, Typography} from "@mui/material";

export default function PasswordChecker() {
    const [password, setPassword] = useState("");
    const [rating, setRating] = useState("");
    const [visible, setVisibility] = useState(false);

    const handleInputChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        try {
            const response = await axios.post("http://localhost:5000/check",{
                "password": password
            })
            console.log(response.data.toString())
            setRating(response.data["rating"])
        } catch(error) {
            setRating("Failed to submit password");
        }
    }

    return(
        <Box id="password-checker">
            <TextField id="outlined-basic" label="Check a password" variant="outlined" onChange={handleInputChange}>
            </TextField>
            <Button variant="contained" onClick={handleSubmit} endIcon={<SendIcon />}>Submit</Button>
            <Typography>{rating}</Typography>
        </Box>
    );
}