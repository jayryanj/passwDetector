import React from 'react';
import {AppBar, Typography} from "@mui/material";

export default function TopBar() {
    return (
        <AppBar id="top-bar" position="static">
            <Typography id="top-bar-title" variant="h4" component="div" sx={{ flexGrow: 1 }}>
                PasswDetector
            </Typography>
        </AppBar>
    );
}