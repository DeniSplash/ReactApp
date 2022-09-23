import React, { useEffect, useState } from 'react';
import './App.scss';
import Form from './form/Form';

function App() {

  const [messageStruct, setMessageStruct] = useState(
    {
      text: 'Текст',
      author: 'Автор'
    }
  )

  const [messageList, setMessageList] = useState([
    { text: 'Текст1', author: 'Денис' },
    { text: 'Текст2', author: 'Денис' },
    { text: 'Текст3', author: 'Денис' }
  ]);

  useEffect(() => {

    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'Mr.Robot') {
      setTimeout(() => {
        setMessageList(old => [...old, { text: 'Вам ответил', author: 'Mr.Robot' }])
      }, 1500);
    }

  }, [messageList]);


  return (

    <div className="App">
      <header className="App-header">
        <Form data={messageStruct} setData={setMessageStruct} setMessages={setMessageList}></Form>
        {messageList.map((message, key) => <Message text={message.text}
          author={message.author} key={key} />)}
      </header>
    </div>
  );
}

const Message = ({ text, author }) => {
  return (
    <div className="Message">
      <b className="Message-title">Текст сообщения: </b>
      <b>{text} </b>
      <b className="Message-title">Автор:  </b>
      <b>{author} </b>
    </div>
  )
}

export default App;
