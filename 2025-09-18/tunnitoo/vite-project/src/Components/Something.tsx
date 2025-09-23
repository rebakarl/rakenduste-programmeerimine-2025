
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const hobbies = [
  "Programmeerimine",
  "Lugemine",
  "Jõusaal",
  "Hip-hop",
  "Reisimine"
];

export default function Something() {
  return (
    <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h4" gutterBottom>Karl Rebane</Typography>
      <Typography variant="h6" gutterBottom>Huvid ja hobid</Typography>
      <List>
        {hobbies.map((hobby, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemText primary={hobby} />
          </ListItem>
        ))}
      </List>
      <Box component="form" sx={{ mt: 3 }}>
        <Stack spacing={2}>
          <TextField label="Email" type="email" name="email" fullWidth />
          <TextField label="Message" name="message" multiline rows={4} fullWidth />
          <Button variant="contained" color="primary" type="button">Send Message</Button>
        </Stack>
      </Box>
    </Box>
  );
}