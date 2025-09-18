import { Button } from '@mui/material';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
