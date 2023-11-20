import PropTypes from 'prop-types';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Collaboration from '@tiptap/extension-collaboration';
import CollaborationCursor from '@tiptap/extension-collaboration-cursor';
import { HocuspocusProvider } from '@hocuspocus/provider';
import { Paper, Box, Typography } from '@mui/material';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomUsername() {
  return `User_${Math.floor(Math.random() * 1000)}`;
}

const wsUrl = import.meta.env.VITE_WS_URL;

const hocuspocusProvider = new HocuspocusProvider({
  url: wsUrl, 
  name: 'example-document',
});


const UserInfo = ({ userName, userColor }) => (
  <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
    <div style={{ backgroundColor: userColor, width: '20px', height: '20px', borderRadius: '50%', marginRight: '10px' }}></div>
    <Typography variant="subtitle1">{userName}</Typography>
  </Box>
);

const Tiptap = ({ userName, userColor }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ history: false }),
      Collaboration.configure({
        document: hocuspocusProvider.document,
      }),
      CollaborationCursor.configure({
        provider: hocuspocusProvider,
        user: {
          name: userName || getRandomUsername(),
          color: userColor ||  getRandomColor() ,
        },
      }),
    ],
  });

  return (
<Paper elevation={3}>
      <UserInfo userName={userName} userColor={userColor} />
      <Paper elevation={3} sx={{ p: 2, minHeight: 300 }}>
        {editor && <EditorContent editor={editor} />}
      </Paper>
    </Paper>
  );
};

Tiptap.propTypes = {
  userName: PropTypes.string.isRequired,
  userColor: PropTypes.string.isRequired
};

UserInfo.propTypes = {
  userName: PropTypes.string.isRequired,
  userColor: PropTypes.string.isRequired,
};

export default Tiptap;
