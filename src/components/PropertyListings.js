
import React, { useState, useEffect } from 'react';

function Home() {
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
    <div className="card-row "width="700" height="500" style={{ display: 'flex', flexWrap:"wrap"}}>
      
      {arts.map(art => (
        <div className='col-4' style={{marginTop: '30px'}}>
        <div className="card " style={{ width: '35rem'}} key={art.id}>
          <img width="700" height="500"className="card-img-top" src={art.urls.regular} alt="Art" />
          <div className="card-body">
            <h5 className="card-title">{art.alt_description}</h5>
            {/* <p className="card-text">{art.description}</p> */}
            <h2>ID: {art.id}</h2>
            <p>Created at: {art.created_at}</p>
            <p>Color: {art.color}</p>
            <p>Likes: {art.likes}</p>
            <p>Width: {art.width}</p>
            <p>Height: {art.height}</p>
            <p>Price: $450</p>
            <button >BUY</button>
            <button className="bg-danger" onClick={() => deleteArt(art.id)}>DELETE</button>
            <button onClick={() => editArt(art.id)}>Edit</button>
          </div>
        </div>
        </div>
      ))}
      
    </div>
  );
      }

export default Home;


