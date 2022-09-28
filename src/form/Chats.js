
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

const Chats = ({ data, setData }) => {

  const chats = data;

  return (
    <List>
      {chats.map((chat, key) => (
        <ListItemButton>
          <ListItemText primary={chat.text} key={key} />
        </ListItemButton>)
      )}
    </List>
  )
}

export default Chats;

