import { useEffect, useState } from 'react';
function Album() {
  const [Albums, setAlbums] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => setAlbums(data))
  }, [])

  return (
    <div className='wrapper'>
        <h1 className='head_line'>Albums</h1>

          <div className="wrap_card">
        {Albums.map((album) => {
          return(
            
              <div className='card'>
                <p className='Big_P'>userID : {album.userId}</p>
                <p className='Big_P'>ID : {album.id}</p>
                <p className='Big_P'>Title : {album.title}</p>
              </div>
              
          )
        })}
      </div></div>
   
  );
}
export default Album;