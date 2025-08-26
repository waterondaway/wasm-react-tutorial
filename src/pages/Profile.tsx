import { Box, Typography } from "@mui/material";

function Profile() {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
                Profile
            </Typography>
            <Typography variant="body1">This is the Profile page.</Typography>
        </Box>
    );
}

export default Profile;
