import React, { useState, useEffect } from "react";

function PropertyList() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/')
      .then(response => response.json())
      .then(data => setHouses(data))
      .catch(error => console.error(error));
  }, []);

  const deleteHouse = id => {
    fetch(`http://localhost:9292/property/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        if (response.ok) {
          setHouses(houses => houses.filter(house => house.id !== id));
        } else {
          console.log("Failed to delete house");
        }
      })
      .catch(error => console.error(error));
  };

  const editHouse = houseId => {
    const house = houses.find(house => house.id === houseId);

    const newTitle = prompt("Enter a new title for the house:", house.name);
    const newDescription = prompt("Enter a new description for the house:", house.description);
    const newImageUrl = prompt("Enter a new image URL for the house:", house.image_url);
    const newPrice = prompt("Enter a new price for the house:", house.price);

    const updatedHouse = {
      ...house,
      name: newTitle || house.name,
      description: newDescription || house.description,
      image_url: newImageUrl || house.image_url,
      price: newPrice || house.price,
    };

    // Send a PUT request to the backend API with the updated house object
    fetch(`http://localhost:9292//${houseId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedHouse)
    })
    .catch(error => console.error(error));
  };

  return (
    <div className="card-row" style={{ display: "flex", flexWrap: "wrap", borderRadius: "40px" }}>
      {houses.map(house => (
        <div className="col-4" style={{ marginTop: "30px", borderRadius: "40px" }} key={house.id}>
          <div className="card" style={{ width: "35rem" }}>
            <img className="card-img-top" src={house.image_url} alt="House" />
            <div className="card-body">
              <h5 className="card-title">{house.name}</h5>
              <p>Price: {house.price}</p>
              <p>Address: {house.address}</p>
              <p>{house.description}</p>
              <button className="btn btn-danger" style={{ marginRight: "5px" }} onClick={() => deleteHouse(house.id)}>Delete</button>
              <button className="btn btn-secondary" style={{ marginRight: "30px" }} onClick={() => editHouse(house.id)}>Edit</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
