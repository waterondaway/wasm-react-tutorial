import { Box, Typography } from "@mui/material";
import init, { greet } from "../wasm/hello_wasm.js";
import { useEffect, useState } from "react";

function DataAnalysis() {
    const [msg, setMsg] = useState("Loading...");
    const [name, setName] = useState("Nonpawit");
    useEffect(() => {
        (async () => {
            await init();
            setMsg(greet(name));
        })();
    }, []);
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
                {msg}
            </Typography>
            <Typography variant="body1">
                This is the Retune & Retrain page.
            </Typography>
        </Box>
    );
}

export default DataAnalysis;
