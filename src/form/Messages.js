
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

const Messages = ({ data, setData }) => {

  const messages = data;

  return (
    <List>
      {messages.map((message, key) => (
        <ListItemButton>
          <ListItemText primary={'Текст: ' + message.text} secondary={'Автор: ' + message.author} key={key} />
        </ListItemButton>)
      )}
    </List>
  )
}

export default Messages;

