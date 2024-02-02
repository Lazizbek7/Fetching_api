import { useEffect, useState } from 'react';
function Post() {
    const [Posts, setPosts] = useState([])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
    }, [])
  
    return (
      <div className='wrapper'>
          <h1 className='head_line'>Posts</h1>

            <div className="wrap_card">
          {Posts.map((Post) => {
            return(
              
                <div className='card'>
                    <p>userId : {Post.userId}</p>
                    <p>ID : {Post.id}</p>
                    <p>Title : {Post.title}</p>
                    <p>Body : {Post.body}</p>
                </div>
                
            )
          })}
        </div></div>
     
    );
  }
export default Post;