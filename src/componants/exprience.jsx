import { Typography, Grid, CardContent, Card, Box } from "@mui/material";

export default function Exprience() {
  const experiences = [
    {
      title: "Front-End Dev.",
      period: "2023 , 2024",
      description: "working for Navid compony",
    },
  ];
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Experience
      </Typography>
      <Box mt={6} sx={{ display: "flex", justifyContent: "space-between" , alignItems : 'center'}}>
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
        <Typography mr={'5rem'}>
            {experiences.length} Experiences <br/>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis<br/>
          molestiae expedita accusamus sed nobis nihil tempora ad ducimus<br/>
          doloremque odit ipsam, qui sequi! Error, dolores quidem pariatur saepe<br/>
          rem nesciunt.
        </Typography>
      </Box>
    </>
  );
}
