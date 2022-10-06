
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

const Messages = ({ idData, data, setData }) => {

  const messages = data;

  return (

    <List>
      {messages.map((message, index) => (
        <ListItemButton key={index}>
          <ListItemText primary={'Текст: ' + message.text} secondary={'Автор: ' + message.author} />
        </ListItemButton>
      )
      )}
    </List>
  )
}

export default Messages;

