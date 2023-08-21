import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice';
import newPostReducer from '../features/posts/newPostSlice';
import filterReducer from '../features/posts/filterSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    newPost: newPostReducer,
    filter: filterReducer
  },
})