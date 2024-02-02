import './App.css';
import Photo from './components/Photo';
import Comment from "./components/Comment";
import Album from './components/Album';
import Post from './components/Post';
import Todo from './components/Todo';
import User from './components/User';
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from 'react';
function App() {
  const [loading , setLoading] = useState(false)
  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    },7000)
  } , [])
  return (
    <div className="App">
    {
      loading?
      <ClipLoader className='Loader'
        color={"#D0010B"}
        loading={loading}
        size={150}
      />
      :
      <div>
      <Post/>
      <Comment/>
      <Album/>
      <Photo/>
      <Todo/>
      <User/>
      </div>
    }

    </div>
  );
}

export default App;
