import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"

const ProfilePage = ({ userName }) => {
  return (
    <Container>
      <div>
        <b>{userName}</b>
        <p></p>
        <ToggleBtn />
      </div>
    </Container>
  )
}

const ToggleBtn = () => {

  const isChecked = useSelector(state => state)
  const dispatch = useDispatch()

  console.log(isChecked);

  return (
    <div>
      <input type="checkbox" value={isChecked} onChange={() => {
        dispatch({ type: 'SWITCH_TOGGLE' });
      }} />


    </div>
  )
}

export default ProfilePage;

