
import React, { useState, useEffect } from 'react';

function PropertyListings() {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch('https://api.unsplash.com/search/photos?query=drawings&client_id=vPrE9gEumlnowpP4lpOeqV4tLUiZZ021myr-Atr-RyA')
      .then(response => response.json())
      .then(artData => setArts(artData.results));
  }, []);

  const deleteArt = artId => {
    // Remove the art object from the array
    setArts(arts.filter(s => s.id !== artId));
  
    // Send a DELETE request to the Unsplash API
    fetch(`https://api.unsplash.com/photos/${artId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Client-ID vPrE9gEumlnowpP4lpOeqV4tLUiZZ021myr-Atr-RyA'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete art object.');
      }
    })
    .catch(error => {
      console.error(error);
    });
    
  

//   const deleteSoldier = botId => {
//     setSoldiers(soldiers.filter(s => s.id !== botId));
//     fetch(`http://localhost:8001/bots/${botId}`, {
//         method: 'DELETE',
//     },[]);

  }

  const editArt = artId => {
    // Find the art object with the matching ID
    const art = arts.find(s => s.id === artId);
  
    // Prompt the user to enter new values for each field
    const newTitle = prompt('Enter a new title for the art object:', art.title);
    const newDescription = prompt('Enter a new description for the art object:', art.description);
    const newImageUrl = prompt('Enter a new image URL for the art object:', art.imageUrl);
  
    // Update the art object with the new values
    const updatedArt = {
      ...art,
      title: newTitle,
      description: newDescription,
      imageUrl: newImageUrl
    };
  
    // Replace the old art object with the updated one in the array
    const updatedArts = arts.map(s => s.id === artId ? updatedArt : s);
    setArts(updatedArts);
  
    // Send a PUT request to the Unsplash API with the updated art object
    fetch(`https://api.unsplash.com/photos/${artId}`, {
      method: 'PUT',
      headers: {
        'Authorization': 'Client-ID vPrE9gEumlnowpP4lpOeqV4tLUiZZ021myr-Atr-RyA',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedArt)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update art object.');
      }
    })
    .catch(error => {
      console.error(error);
    });
  };
  
  return (
    <div className='row'>
        
      {arts.map(art => (
        <div key={art.id}>
          <h3>{art.alt_description}</h3>
          <img width="700" height="500" src={art.urls.regular} alt="art" />
          <h2>id: {art.id}</h2>
          <p>created at: {art.created_at}</p>
          <p>color: {art.color}</p>
          <p>likes: {art.likes}</p>
          <p>width: {art.width}</p>
          <p>height: {art.height}</p>
          <p>Price: $450</p>
          <button className='bg-danger' onClick={() => deleteArt(art.id)}>DELETE</button>
           <button onClick={() => editArt(art.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default PropertyListings;;


{/* <h3>${art.alt_description}</h3>
       <img width="700" height="500" src="${art.urls.regular}" alt="art"><br>
       id: ${art.id}<br>
       created at: ${art.created_at}<br>
       color: ${art.color}<br>
       likes: ${art.likes}<br>
       width: ${art.width}<br>
       height: ${art.height}<br>
       Price: $450</p1>
export default Home */}
