
import './App.scss';

function App() {

  const text = "Тестовый текст"

  return (
    <div className="App">
      <header className="App-header">
        Мой первый React App
        <Message text={text} />
      </header>
    </div>
  );
}


const Message = ({ text }) => {
  return (
    <div className="Message">
      <h3>{text}</h3>
    </div>
  )
}

export default App;
