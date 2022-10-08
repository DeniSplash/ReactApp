import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { useSelector } from 'react-redux';

const Messages = ({ idData }) => {

  const msg = useSelector(state => state.messages);

  let someMessage = msg.filter(item => item.id == idData);

  return (
    <List>
      {someMessage.map((message, index) => (
        <ListItemButton key={index}>
          <ListItemText primary={'Текст: ' + message.text} secondary={'Автор: ' + message.author} />
        </ListItemButton>)
      )}
    </List>
  )
}

export default Messages;

