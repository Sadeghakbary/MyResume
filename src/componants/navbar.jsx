import GitHubIcon from "@mui/icons-material/GitHub";
import { AppBar, Toolbar, Typography, Box, Avatar } from "@mui/material";

export default function Navbars() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: 2,
          }}
        >
          <Avatar
            alt="Logo"
            src="src/assets/OIP.jpg"
            sx={{ width: 100, height: 100 }}
          />
          <GitHubIcon sx={{ color: "white", marginTop: 1 }} />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", color: "white" }}>
          <Typography variant="h6" component="div">
            Sadegh Akbary
          </Typography>
          <Typography variant="body1" component="div">
            React Developer
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
