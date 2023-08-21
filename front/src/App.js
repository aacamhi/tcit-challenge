import './App.css';
import SearchBar from './components/SearchBar';
import PostsList from './components/PostsList';
import CreateForm from './components/CreateForm';
import { useDispatch } from 'react-redux';
import { setPosts } from './features/posts/postsSlice';
import { useEffect } from 'react';
import axios from 'axios';
import urls from './constants/urls';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await axios.get(`${urls.POSTS_BACKEND_URL}/posts`);
        dispatch(setPosts(posts.data));
      } catch (error) {
        alert('Hubo un error cargando las publicaciones')
      }
    }
    fetchData();
  }, [dispatch]);
  return (
    <div className="App">
      <div className='title'>TCIT Posts</div>
      <SearchBar />
      <PostsList />
      <CreateForm />
    </div>
  );
}

export default App;
