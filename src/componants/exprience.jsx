import { Typography, Grid, CardContent, Card ,Box} from "@mui/material"




export default function Exprience() {
    const experiences = [{
        title: "Front-End Dev.",
        period: "2023 , 2024",
        description:
            "working for Navid compony",
    },]
    return (
        <>

            <Box mt={6}>
                <Typography variant="h6" gutterBottom>
                    Experience
                </Typography>
                <Grid container spacing={3}>
                    {experiences.map((exp, idx) => (
                        <Grid item xs={12} md={6} key={idx}>
                            <Card>
                                <CardContent>
                                    <Typography variant="subtitle1" fontWeight="bold">
                                        {exp.title}
                                    </Typography>
                                    {exp.company && (
                                        <Typography variant="body2" color="text.secondary">
                                            {exp.company}
                                        </Typography>
                                    )}
                                    {exp.period && (
                                        <Typography variant="body2" color="text.secondary">
                                            {exp.period}
                                        </Typography>
                                    )}
                                    <Typography variant="body2" mt={1}>
                                        {exp.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}
