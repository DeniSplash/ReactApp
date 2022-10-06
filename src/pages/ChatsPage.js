import { Container } from "@mui/system"
import Grid from '@mui/material/Grid';
import Form from '../form/Form';
import Chats from '../form/Chats';
import Messages from '../form/Messages';
import { useParams } from "react-router-dom";

const ChatsPage = ({ messageStruct, setMessageStruct, setMessageList, chatList, setChatList, messageList }) => {

  let params = useParams();

  let someMessage = messageList.filter(item => item.id == params.chatId);

  return (
    <Container maxWidth="lg">

      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item xs={12}>
          <Form idChat={params.chatId} data={messageStruct} setData={setMessageStruct} setMessages={setMessageList}></Form>
        </Grid>
        <Grid item xs={2}>
          <Chats data={chatList} setData={setChatList} ></Chats>
        </Grid>
        <Grid item xs={10}>
          <Messages idData={params.chatId} data={someMessage} setData={setMessageList} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ChatsPage;

