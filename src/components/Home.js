import React from "react"

function Home(){
    return(
      <div >
      <h1>WELCOME TO MASQANI REAL ESTATE COMPANY</h1>
      <p>At our company, we pride ourselves on providing exceptional service to our clients in finding their dream homes. Whether you're buying, selling, or renting, we're here to help.</p>
      <p>Take a look at our featured properties below, or use our search bar to find properties that fit your specific needs.</p>
     
</div>
    )
}

export default Home
// import React, { useState, useEffect } from 'react';

// function Home() {
//   const [arts, setArts] = useState([]);

//   useEffect(() => {
//     fetch('https://api.unsplash.com/search/photos?query=drawings&client_id=vPrE9gEumlnowpP4lpOeqV4tLUiZZ021myr-Atr-RyA')
//       .then(response => response.json())
//       .then(artData => setArts(artData.results));
//   }, []);

//   const deleteArt = artId => {
//     // Remove the art object from the array
//     setArts(arts.filter(s => s.id !== artId));
  
//     // Send a DELETE request to the Unsplash API
//     fetch(`https://api.unsplash.com/photos/${artId}`, {
//       method: 'DELETE',
//       headers: {
//         'Authorization': 'Client-ID vPrE9gEumlnowpP4lpOeqV4tLUiZZ021myr-Atr-RyA'
//       }
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to delete art object.');
//       }
//     })
//     .catch(error => {
//       console.error(error);
//     });
  

// //   const deleteSoldier = botId => {
// //     setSoldiers(soldiers.filter(s => s.id !== botId));
// //     fetch(`http://localhost:8001/bots/${botId}`, {
// //         method: 'DELETE',
// //     },[]);

//   }

//   return (
//     <div>
        
//       {arts.map(art => (
//         <div key={art.id}>
//           <h3>{art.alt_description}</h3>
//           <img width="700" height="500" src={art.urls.regular} alt="art" />
//           <h2>id: {art.id}</h2>
//           <p>created at: {art.created_at}</p>
//           <p>color: {art.color}</p>
//           <p>likes: {art.likes}</p>
//           <p>width: {art.width}</p>
//           <p>height: {art.height}</p>
//           <p>Price: $450</p>
//           <button className='bg-danger' onClick={() => deleteArt(art.id)}>DELETE</button>
//           <button>EDIT</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home;


// /* <h3>${art.alt_description}</h3>
//        <img width="700" height="500" src="${art.urls.regular}" alt="art"><br>
//        id: ${art.id}<br>
//        created at: ${art.created_at}<br>
//        color: ${art.color}<br>
//        likes: ${art.likes}<br>
//        width: ${art.width}<br>
//        height: ${art.height}<br>
//        Price: $450</p1>
// export default Home */