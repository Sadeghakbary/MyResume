import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const skills = [
  { name: 'React', percent: 80 },
  { name: 'JavaScript', percent: 70 },
  { name: 'CSS', percent: 60 },
];

export default function Skills() {
  return (
    <Stack spacing={3} sx={{ width: '100%', maxWidth: 400, m: 'auto', p: 2 }}>
      {skills.map((skill, idx) => (
        <Box key={idx}>
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography variant="subtitle1" fontWeight="bold">
              {skill.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`${skill.percent}%`}
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={skill.percent}
            sx={{ height: 10, borderRadius: 5 }}
          />
        </Box>
      ))}
    </Stack>
  );
}

