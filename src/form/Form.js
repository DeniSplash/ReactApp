const Form = ({ data, setData, setMessages }) => {

  // Почему-то так не заработало((
  //const [text, author] = data;

  const text = data.text
  const author = data.author;

  const submitForm = (e) => {

    e.preventDefault();

    if (text.length > 0 && author.length > 0) {

      setMessages(old => [...old, { text, author }])

      setData(
        {
          text: "",
          author: ""
        }
      )
    }
  };


  return (
    <form className="Form" onSubmit={submitForm}>
      <div>
        <input className="Message-input" placeholder="Текст" value={text} onChange={(e) => setData(old => ({ ...old, text: e.target.value }))} />
      </div>
      <div>
        <input className="Message-input" placeholder="Автор" value={author} onChange={(e) => setData(old => ({ ...old, author: e.target.value }))} />
      </div>
      <div>
        <button className="Message-button" type="submit" >Отправить</button>
      </div>
    </form>
  )
}

export default Form;

