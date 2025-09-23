
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function Home() {
  const [name, setName] = useLocalStorage<string>('name', '');
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Stack spacing={2}>
        <Typography variant="body1">
          This is a sample home page. You can add your own content here.
        </Typography>
        <TextField label="Your name" variant="outlined" value={name} onChange={e => setName(e.target.value)} />
      </Stack>
    </Box>
  );
}
