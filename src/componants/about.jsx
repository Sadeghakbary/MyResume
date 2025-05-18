import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        About me
      </Typography>
      <Typography
        variant="body1"
        sx={{
          width: "50%",
          whiteSpace: "pre-line",
          wordBreak: "break-word",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
        consectetur obcaecati magnam doloremque ex autem eum eveniet
        laboriosam minus facere deleniti.
      </Typography>
    </Box>
  );
}