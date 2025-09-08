import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import RetuneRetrain from "./pages/RetuneRetrain";
import DataAnalysis from "./pages/DataAnalysis";
import Progression from "./pages/Progression";
import Profile from "./pages/Profile";
import Appearance from "./pages/Appearance";
import "./App.css";

const drawerWidth = 240;

function App() {
    return (
        <Router>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <Sidebar />
                <Box
                    component="main"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/retune-retrain"
                            element={<RetuneRetrain />}
                        />
                        <Route
                            path="/data-analysis"
                            element={<DataAnalysis />}
                        />
                        <Route path="/progression" element={<Progression />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/appearance" element={<Appearance />} />
                    </Routes>
                </Box>
            </Box>
        </Router>
    );
}

export default App;
