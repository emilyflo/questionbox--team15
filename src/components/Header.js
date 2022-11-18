import {
    Typography,
    AppBar,
    Box,
    IconButton,
    Button,
    Toolbar,
} from "@mui/material";
import { letterSpacing } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2 }}
                    >
                        <FavoriteIcon />
                    </IconButton>
                    {/* favorites icon button - only if logged in */}
                    <Typography
                        sx={{ fontSize: 50, textAlign: "center", flexGrow: 1 }}
                    >
                        Pet Questions
                    </Typography>
                    {/* profile icon button OR login button */}
                    <Button color="inherit">Login</Button>
                    <IconButton>
                        <PersonIcon color="white"/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
