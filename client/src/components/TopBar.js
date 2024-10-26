import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import DatasetIcon from '@mui/icons-material/Dataset';

export default function TopBar() {
    return (
        <Box className={"top-bar-box"}>
            <AppBar className={"top-bar"} position="static">
                <Toolbar>
                    <DatasetIcon className={"top-bar-icon"} />
                    <Typography className={"top-bar-title"} variant="h4" component="div">
                        PasswDetector-ML
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}