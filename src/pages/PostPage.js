import { Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addPost, getAllPosts } from "../firebase/crud";
import { useAuth } from "../hook/useAuth";
import { fetchPostsThunk } from "../slices/slicesPost";

const PostPage = () => {

  const { posts, loading, err } = useSelector(state => state.post)
  const dispatch = useDispatch()

  const email = useAuth().email;

  const [data, setData] = useState([])
  const [load, setLoad] = useState()
  const [fromData, setFromData] = useState({
    body: '123',
    user: 'user@google.com',
  })

  const getPostHandler = async () => {
    setLoad(true);
    let data = await getAllPosts();
    setLoad(false);
    setData(data);
  }

  useEffect(() => {
    // dispatch(fetchPostsThunk());
    getPostHandler();
  }, [])

  return (
    <Container>
      <div>
        <Button variant="contained" onClick={() => { addPost(fromData); getPostHandler(); }} >Добавить</Button>
        {
          load ? <div>Грузим посты {email}</div> :
            <PostList data={data} user={email} />
        }
      </div>
    </Container>
  )
}

const PostList = ({ data, user }) => {
  return (
    <>
      {data.map((e, i) =>
        e.user === user ?
          <div key={i}>
            <p>{e.body}</p>
            <hr />
          </div> :
          null
      )
      }

    </>
  )
}

export default PostPage;

