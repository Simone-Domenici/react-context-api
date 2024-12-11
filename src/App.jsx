import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DefaultLayout from './layouts/DefaultLayout';
import About from './pages/About';
import AllPosts from './pages/AllPosts';
import BlankLayout from './layouts/BlankLayout';
import NotFound from './pages/NotFound';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/posts/CreatePost';
import PostsContext from './contexts/PostsContext';
import axios from 'axios';
import PostsPage from './components/posts/PostPage';

function App(){

  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Recupera i post
  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  // Recupera le categorie
  useEffect(() => {
    axios.get("http://localhost:3000/posts/categories")
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <PostsContext.Provider value={{ posts, setPosts, categories }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/posts'>
              {/* <Route index Component={AllPosts} /> */}
              <Route index Component={PostsPage}/>
              <Route path=':id' element={<PostDetail />} />
              <Route path='create' element={<CreatePost />} />
            </Route>
          </Route>
          <Route element={<BlankLayout />}>
              <Route path='*' Component={NotFound} ></Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </PostsContext.Provider>
  );
};

export default App;
