import { Box, Typography, Grid } from "@mui/material"


export default function Project() {

    const projects = [
        "Resumr/src/assets/project1.jpg",
        "Resumr/src/assets/project2.jpg",
        "Resumr/src/assets/project3.jpg",
        "Resumr/src/assets/project4.jpg",

    ];
    return (
        <>
            <Box mt={6}>
                <Typography variant="h6" gutterBottom>
                    Projects
                </Typography>
                <Grid container spacing={3}>
                    {projects.map((src, idx) => (
                        <Grid item xs={12} sm={6} key={idx}>
                            <Box
                                component="img"
                                src={src}
                                alt={`Project ${idx + 1}`}
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: 2,
                                    boxShadow: 3,
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}
