import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { AppBar, Toolbar, Typography, Box, Avatar, Button } from "@mui/material";

export default function Navbars() {

  const buttonClickHandler = () => {
    console.log('shod');

  }
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
            src="src/assets/profile.jpg"
            sx={{ width: 100, height: 100, marginTop: '1rem' }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <GitHubIcon sx={{ color: "white", marginTop: 1 }} />
            <InstagramIcon sx={{ color: "white", marginTop: 1 }} />
            <YouTubeIcon sx={{ color: "white", marginTop: 1 }} />
          </div>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", color: "white" }}>
          <Typography variant="h6" component="div">
            Sadegh Akbary
          </Typography>
          <Typography variant="body1" component="div">
            React Developer
          </Typography>
        </Box>

        <Button onClick={() => buttonClickHandler} variant="contained" color="secondary" sx={{ marginLeft: '70rem' }}>
          we can change the world
        </Button>
      </Toolbar>
    </AppBar>
  );
}