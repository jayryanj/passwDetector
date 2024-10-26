import React from 'react';
import {Card, CardContent, Grid2, Typography} from "@mui/material";
import BlenderIcon from '@mui/icons-material/Blender';
import StraightenIcon from '@mui/icons-material/Straighten';
import RepeatIcon from '@mui/icons-material/Repeat';
import Box from "@mui/material/Box";

export default function Suggestions() {
    return(
        <Box className={"suggestions"}>
            <Typography className={"suggestions-title"} component={"div"} variant={"h4"}>
                Password Tips
            </Typography>
            <Grid2 className={"suggestions-grid"} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 12 }}>
                <Grid2 size={{ xs: 2, sm: 2, md: 4 }}>
                    <Card className={"suggestion-card"} sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Box className={"suggestion-card-box"}>
                                <Typography className={"suggestion-card-title"} variant="h5" component="div">
                                    Mix It Up
                                </Typography>
                                <BlenderIcon className={"suggestion-card-icon"} />
                            </Box>
                            <Typography className={"suggestion-description"} variant="body2">
                                Combine lowercase, uppercase, numbers, and special characters.
                                It is best to avoid any patterns that could be predicted by attackers.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 size={{ xs: 2, sm: 2, md: 4 }}>
                    <Card className={"suggestion-card"} sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Box className={"suggestion-card-box"}>
                                <Typography className={"suggestion-card-title"} variant="h5" component="div">
                                    Go for Length
                                </Typography>
                                <StraightenIcon className={"suggestion-card-icon"} />
                            </Box>
                            <Typography className={"suggestion-description"} variant="body2">
                                Aim for passwords that have at least 12 characters.
                                Long, memorable passwords are better than short, complex ones.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 size={{ xs: 2, sm: 2, md: 4 }}>
                    <Card className={"suggestion-card"} sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Box className={"suggestion-card-box"}>
                                <Typography className={"suggestion-card-title"} variant="h5" component="div">
                                    Don't Repeat
                                </Typography>
                                <RepeatIcon className={"suggestion-card-icon"} />
                            </Box>
                            <Typography className={"suggestion-description"} variant="body2">
                                Avoid re-using the same password for multiple accounts.
                                It's best to minimize the damage by using different passwords for different accounts.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
            </Grid2>
        </Box>
    );
}