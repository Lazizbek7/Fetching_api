import { useEffect, useState } from 'react';
function Comment() {

        const [Comments, setComments] = useState([])
        useEffect(()=>{
          fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => setComments(data))
        }, [])
      
        return (
          <div className='wrapper'>
              <h1 className='head_line'>Comments</h1>
    
                <div className="wrap_card">
              {Comments.map((Comment) => {
                return(
                  
                    <div className='card'>
                        <p>postId : {Comment.postId}</p>
                        <p>ID : {Comment.id}</p>
                        <p>Name : {Comment.name}</p>
                        <p>Email : {Comment.email}</p>
                        <p>Body : {Comment.body}</p>
                    </div>
                    
                )
              })}
            </div></div>
         
        );
}
export default Comment;