import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function About() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        About
      </Typography>
      <Stack spacing={2}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          More info coming soon!
        </Typography>
      </Stack>
    </Box>
  );
}
