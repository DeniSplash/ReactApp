import { Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPostsThunk } from "../slices/slicesPost";

const PostPage = ({ data }) => {

  const { posts, loading, err } = useSelector(state => state.post)
  const dispatch = useDispatch()

  console.log(posts);

  useEffect(() => {
    dispatch(fetchPostsThunk())
  }, [])

  return (
    <Container>
      <div>
        <h1>Посты</h1>
        {loading ? <h1>загрузка...</h1> :
          posts.map(data => (
            <div key={data.id}>{data.body}
            </div>
          ))
        }
      </div>
    </Container>
  )
}



export default PostPage;

