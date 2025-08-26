import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
    Typography,
    Collapse,
} from "@mui/material";
import {
    Home as HomeIcon,
    Info as InfoIcon,
    ContactMail as ContactIcon,
    StarBorder,
    ExpandLess,
    ExpandMore,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { Wrench } from "lucide-react";
import { useState } from "react";

const drawerWidth = 270;

function Sidebar() {
    const location = useLocation();
    const [openFunctionalities, setOpenFunctionalities] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                    backgroundColor: "#ffffff",
                    borderRight: "1px solid #e0e0e0",
                },
            }}
        >
            <Box
                sx={{
                    backgroundColor: "#fffff",
                    color: "#000000",
                    marginTop: 2,
                    paddingLeft: 2,
                    display: "flex",
                    justifyContent: "start",
                }}
            >
                <Typography
                    variant="subtitle1"
                    sx={{
                        fontWeight: "bold",
                        marginBottom: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                    }}
                >
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                        Soothsayer Platform
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{ fontSize: 12, color: "gray" }}
                    >
                        You are logged in as:
                    </Typography>
                </Typography>
            </Box>

            <List sx={{ paddingY: 0 }}>
                {/* Functionalities Button */}
                <ListItemButton
                    sx={{ paddingX: 2, gap: 2 }}
                    onClick={() => {
                        setOpenFunctionalities(!openFunctionalities);
                    }}
                >
                    <ListItemText
                        primary="Functionalities"
                        secondary={
                            !openFunctionalities
                                ? "Lorem Ipsum is simply dummy text of"
                                : ""
                        }
                        sx={{
                            "& .MuiListItemText-primary": {
                                fontSize: 15,
                                fontWeight: "bold",
                            },
                            "& .MuiListItemText-secondary": {
                                fontSize: 12,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            },
                        }}
                    />
                    {openFunctionalities ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openFunctionalities} timeout="auto" unmountOnExit>
                    <List sx={{ py: 0 }}>
                        <ListItemButton>
                            <ListItemText
                                primary="Retune & Retrain"
                                sx={{
                                    "& .MuiListItemText-primary": {
                                        fontSize: 14,
                                    },
                                }}
                            />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText
                                primary="Data Analysis"
                                sx={{
                                    "& .MuiListItemText-primary": {
                                        fontSize: 14,
                                    },
                                }}
                            />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText
                                primary="Progression"
                                sx={{
                                    "& .MuiListItemText-primary": {
                                        fontSize: 14,
                                    },
                                }}
                            />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton
                    sx={{ paddingX: 2, gap: 2 }}
                    onClick={() => {
                        setOpenSettings(!openSettings);
                    }}
                >
                    <ListItemText
                        primary="Settings"
                        secondary={
                            !openSettings
                                ? "Lorem Ipsum is simply dummy text of"
                                : ""
                        }
                        sx={{
                            "& .MuiListItemText-primary": {
                                fontSize: 15,
                                fontWeight: "bold",
                            },
                            "& .MuiListItemText-secondary": {
                                fontSize: 12,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            },
                        }}
                    />
                    {openSettings ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openSettings} timeout="auto" unmountOnExit>
                    <List sx={{ py: 0 }}>
                        <ListItemButton>
                            <ListItemText
                                primary="Profile"
                                sx={{
                                    "& .MuiListItemText-primary": {
                                        fontSize: 14,
                                    },
                                }}
                            />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText
                                primary="Appearance"
                                sx={{
                                    "& .MuiListItemText-primary": {
                                        fontSize: 14,
                                    },
                                }}
                            />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText
                                primary="Logout"
                                sx={{
                                    "& .MuiListItemText-primary": {
                                        fontSize: 14,
                                    },
                                }}
                            />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </Drawer>
    );
}

export default Sidebar;
