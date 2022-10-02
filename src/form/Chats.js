
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from 'react-router-dom';

const Chats = ({ data, setData }) => {

  const chats = data;

  return (
    <List>
      {chats.map((chat, index) => (
        <ListItemButton key={chat.id} >
          <Link style={{ display: "block", flexGrow: "1" }} to={`${index}`}>{chat.text}</Link>
        </ListItemButton>)
      )}
    </List>
  )
}

export default Chats;

