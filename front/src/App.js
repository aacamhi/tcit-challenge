import './App.css';
import SearchBar from './components/SearchBar';
import PostsList from './components/PostsList';
import CreateForm from './components/CreateForm';
import { useDispatch } from 'react-redux';
import { setPosts } from './features/posts/postsSlice';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const posts = await axios.get('http://localhost:5000/posts');
      dispatch(setPosts(posts.data));
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
