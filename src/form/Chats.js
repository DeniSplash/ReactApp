import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

import { addChat, removeChat } from '../slices/slicesChats'
import { Button } from '@mui/material';

const Chats = () => {

  const chats = useSelector(state => state.chats);
  const dispatch = useDispatch();

  const count = chats.length + 1;

  const newChat = { id: count, text: `Чат${count}` }


  const addChatHandler = () => {
    dispatch(addChat(newChat));
  };

  const deleteChatHandler = () => {
    dispatch(removeChat());
  };

  return (
    <div>
      <List>
        {chats.map((chat, index) => (
          <ListItemButton key={chat.id} >
            <Link style={{ display: "block", flexGrow: "1" }} to={`${index}`}>{chat.text}</Link>
          </ListItemButton>)
        )}
      </List>
      <div>
        <Button variant="outlined" onClick={addChatHandler} startIcon={<AddIcon />}>Добавить</Button>
        <Button variant="outlined" onClick={deleteChatHandler} startIcon={<DeleteIcon />}>Удалить</Button>
      </div>
    </div>
  )
}

export default Chats;

