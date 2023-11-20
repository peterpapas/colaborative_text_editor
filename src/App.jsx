import{ useState } from 'react';
import Tiptap from "./Tiptap";
import WelcomePage from './WelcomePage';
import { Container, Typography, Paper, Box } from '@mui/material';

function App() {

  const [user, setUser] = useState(null);

  const handleJoin = (name, color) => {
    setUser({ name, color });
  };

  return (
    <Container maxWidth="md">
      <Box textAlign="center" my={5}>
        <Paper elevation={3} sx={{ p: 4, backgroundColor: '#f5f5f5' }}>
          <Typography variant="h4" component="h1" gutterBottom color="primary">
            Collaborative Editor Showcase
          </Typography>
          <Typography variant="subtitle1" gutterBottom color="secondary">
            An interactive real-time collaborative text editor.
          </Typography>
          <Typography paragraph color="textSecondary">
            This application demonstrates the capabilities of a real-time collaborative text editor built with modern web technologies. Users can simultaneously edit a document with live updates, showcasing the power of collaborative editing in web applications.
          </Typography>
          <Typography paragraph color="textSecondary">
            Built using Vite, React, Tiptap, Hocuspokus, and Netlify.
          </Typography>
        </Paper>
      </Box>
      {!user ? (
        <WelcomePage onJoin={handleJoin} />
      ) : (
        <Tiptap userName={user.name} userColor={user.color} />
      )}
    </Container>
  );
}

export default App;
