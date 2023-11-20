import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { CirclePicker } from 'react-color';
import PropTypes from 'prop-types';


const WelcomePage = ({ onJoin }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#f44336'); // Default color

  const handleJoin = () => {
    if (name && color) {
      onJoin(name, color);
    } else {
      alert("Please enter your name and select a color.");
    }
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Typography variant="h4" gutterBottom>Welcome to the Collaborative Editor</Typography>
      <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, mb: 2 }}>
        <TextField
          label="Enter your name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Typography sx={{ mt: 2, mb: 1 }}>Select a Color:</Typography>
        <CirclePicker color={color} onChangeComplete={handleColorChange} />
      </Box>
      <Button variant="contained" color="primary" onClick={handleJoin}>
        Join the Editor
      </Button>
    </Box>
  );
};

WelcomePage.propTypes = {
    onJoin: PropTypes.func.isRequired,
  };
  

export default WelcomePage;
