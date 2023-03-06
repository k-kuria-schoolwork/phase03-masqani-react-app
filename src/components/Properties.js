import {useEffect,useState} from "react"
function PropertyList() {
  const [houses, setHouses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('name');

  useEffect(() => {
    fetch('http://localhost:9292/')
      .then(response => response.json())
      .then(houses => setHouses(houses));
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
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const editHouse = houseId => {
    // Find the house object with the matching ID
    const house = houses.find(house => house.id === houseId);

    // Prompt the user to enter new values for each field
    const newTitle = prompt('Enter a new title for the house:', house.title);
    const newDescription = prompt('Enter a new description for the house:', house.description);
    const newImageUrl = prompt('Enter a new image URL for the house:', house.image_url);
    const newPrice = prompt('Enter a new price for the house:', house.price);

    // Create the updated house object
    const updatedHouse = {
      ...house,
      name: newTitle || house.title,
      description: newDescription || house.description,
      image_url: newImageUrl || house.image_url,
      price: newPrice || house.price,
    };

    // Send a PUT request to the backend API with the updated house object
    fetch(`http://localhost:9292/property/update/${houseId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedHouse)
    })
      .then(response => {
        if (response.ok) {
          setHouses(houses => {
            const updatedHouses = [...houses];
            const index = updatedHouses.findIndex(house => house.id === houseId);
            updatedHouses[index] = updatedHouse;
            return updatedHouses;
          });
        } else {
          console.log('Failed to update house object');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const filteredHouses = houses.filter(house => {
    if(searchType === 'name'){
      return house.name.toLowerCase().includes(searchTerm.toLowerCase());
    }else if(searchType === 'price'){
      return house.price === parseFloat(searchTerm);
    }else{
      return true;
    }
  });

  return (
    <>

<section className='hero'>
            <div className='container'>
              <h1>Search For Your Next Home</h1>  
            
              <form className='flex'>
                <div className='box'>
                  <span>Location Address</span>
                  <input type='text' placeholder='Enter the location Address' onChange={(event) => {
                    setSearchType('name');
                  }} />
                </div>
                {/* <div className='box'>
                  <span>Property Type</span>
                  <input type='text' placeholder='Property Type' />
                  <select id="inputState" class="form-select">
                  <option selected>Choose...</option>
                  <option>Apartment</option>data
                  <option>Townhouses</option>
                  <option>Condos</option>
                  <option>Mansions</option>
                  <option>Cottage</option>
                  </select>
                </div> */}
                <div className='box'>
                  <span>Price</span>
                  <input type='number' placeholder='Enter the price' min='0' onChange={(event) => {
                    setSearchTerm('');
                  }}/>
                </div>
                <div>
                <div className='btn1'>
                  <button>
                  Search
                </button>
                </div>
                </div>
              </form>
            </div>
          </section>
      
    <div className="card-row " width="700" height="500" style={{ display: 'flex', borderRadius: '40px', flexWrap: 'wrap' }}>
       {/* {houses.filter((house) => {
        if(searchTerm == ""){
          return house;
        }else if(searchType === "name" && house.name.toLowerCase().includes(searchTerm.toLowerCase())){
          return house;
        }else if(searchType === "price" && house.price.toString().toLowerCase().includes(searchTerm.toLowerCase())){
          return house;
        }
      })}  */}

            {filteredHouses.map((house) => (
            <div className="col-4" style={{ marginTop: "30px", borderRadius: "40px" }} key={house.id}>
            <div className="card" style={{ width: "35rem" }} key={house.id}>
            <img width="700" height="500" className="card-img-top" src={house.image_url} alt="House" />
            <div className="card-body">
            <h5 className="card-title">{house.name}</h5>
            <p>Price: kshs.{house.price}</p>
            <p>Address: {house.address}</p>
            <p>{house.description}</p>
            <button className="bg-danger" type="button" class="btn btn-danger" style={{ marginRight: "5px" }} onClick={() => deleteHouse(house.id)}>
            DELETE
            </button>
            <button type="button" class="btn btn-secondary" style={{ marginRight: "30px" }} onClick={() => editHouse(house.id)}>
            Edit
            </button>
            </div>
            </div>
            </div>
            ))}


    </div>
  </>
  )
}

export default PropertyList;
