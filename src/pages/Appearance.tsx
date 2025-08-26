import { Box, Typography } from "@mui/material";

function Appearance() {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
                Appearance
            </Typography>
            <Typography variant="body1">
                This is the Appearance page.
            </Typography>
        </Box>
    );
}

export default Appearance;
