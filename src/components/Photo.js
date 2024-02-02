import { useEffect, useState } from 'react';
function Photo() {
  const [Photo, setPhoto] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setPhoto(data))
  }, [])

  return (
    <div className='wrapper'>
        <h1 className='head_line'>Photo</h1>

          <div className="wrap_card">
        {Photo.map((photo) => {
          return(
            
              <div className='card'>
                  <p>albumId : {photo.albumId}</p>
                  <p>ID : {photo.id}</p>
                  <p>Title : {photo.title}</p>
                  <p>Url :<a href={photo.url}  target='_blank'> click</a></p>
                  <p>thumbnailUrl :<a href={photo.thumbnailUrl}  target='_blank'> click</a></p>
              </div>
              
          )
        })}
      </div></div>
   
  );
}
export default Photo;

