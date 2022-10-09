import { Container } from "@mui/system"
import Grid from '@mui/material/Grid';
import Form from '../form/Form';
import Chats from '../form/Chats';
import Messages from '../form/Messages';
import { useParams } from "react-router-dom";

const ChatsPage = () => {

  let params = useParams();

  //const messageList = useSelector(state => state.messages);

  //

  return (
    <Container maxWidth="lg">

      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item xs={12}>
          <Form idChat={params.chatId} ></Form>
        </Grid>
        <Grid item xs={2}>
          <Chats ></Chats>
        </Grid>
        <Grid item xs={10}>
          <Messages idData={params.chatId} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ChatsPage;

