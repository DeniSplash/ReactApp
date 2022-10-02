import { Container } from "@mui/material";

const ProfilePage = ({ userName }) => {
  return (
    <Container>
      <div>
        <b>{userName}</b>
      </div>
    </Container>
  )
}

export default ProfilePage;

