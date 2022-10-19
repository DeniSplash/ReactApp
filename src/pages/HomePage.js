import { Container } from "@mui/system";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const HomePage = () => {
  const isAuth = useAuth().isAuth

  return isAuth ? (
    <Container>
      <div>
        <Link to={'/chats'}>Чаты </Link>
      </div>
      <div>
        <Link to={'/login'}>Логин </Link>
      </div>
      <div>
        <Link to={'/profile'}>Профиль </Link>
      </div>
      <div>
        <Link to={'/post'}>Посты </Link>
      </div>
    </Container>
  ) : (<Navigate to={'/login'}></Navigate>);
}

export default HomePage;

