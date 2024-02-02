import { useEffect, useState } from 'react';
function User() {
  const [Users, setUser] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUser(data))
  }, [])

  return (
    <div className='wrapper'>
        <h1 className='head_line'>Todos</h1>

          <div className="wrap_card">
        {Users.map((user) => {
          return(
            
              <div className='card' id='Large_card'>
                  <p>ID : {user.id}</p>
                  <p>Name : {user.name}</p>
                  <p>UserName :{user.username}</p>
                  <p>Address : </p>
                  <p>Street : {user.address.street}</p>
                  <p>City : {user.address.city}</p>
                  <p>ZipCode : {user.address.zipcode}
                  </p>
                  <p>Geo : </p>
                  <p>Lat : {user.address.geo.lat}</p>
                  <p>Lng : {user.address.geo.lng}</p>
                  <br />
                  <p>Phone : {user.phone}</p>
                  <p>Website :<a href={user.website}> click</a></p>
                  <p>Company :  </p>
                  <p>FullName : {user.company.name}</p>
                  <p>catchPhrase : {user.company.catchPhrase}</p>
                  <p>BS : {user.company.bs}</p>
              </div>
              
          )
        })}
      </div></div>
   
  );
}

export default User;