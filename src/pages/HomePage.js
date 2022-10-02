import { Container } from "@mui/system";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container>
      <div>
        <Link to={'/chats'}>Чаты </Link>
      </div>
      <div>
        <Link to={'/profile'}>Профиль </Link>
      </div>
    </Container>
  )
}

export default HomePage;

