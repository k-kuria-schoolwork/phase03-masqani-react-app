import React, { useState } from "react"

function AddProperty(){

  const [addProp, setAddProp] = useState({
    name:"",
    number:"",
    city:"",
    address:"",
    price:"",
  },[])


  //post method to send new data to server
  function submit(e){
    e.preventDefault();
    fetch( {
      name:addProp.name,
      number:addProp.number,
      city:addProp.city,
      address:addProp.address,
      price:addProp.price,
    })
  }


  function handle(e){
    const newprop={...addProp}
    newprop[e.target.id] = e.target.value
    setAddProp(newprop)
    console.log(newprop)

  }
    return(
      
        <div className="formcont1">
            <div  className="addheader1">
             <h1 className="jina">ADD PROPERTY FOR SALE</h1>
             </div>
            <div className="formcont">
          
            <form onSubmit={(e)=>submit(e)} class="row g-3">
            <div class="col-md-5">
    <label for="inputAddress" class="form-label">Agent Name</label>
    <input onChange={(e)=>handle(e)} id="name"value={addProp.name} type="text" class="form-control"  placeholder="Kamau Njiruu"/>
  </div>

  <div class="col-md-4">
    <label for="inputAddress2" class="form-label">Agent Number</label>
    <input onChange={(e)=>handle(e)} id="number"value={addProp.number} type="number" class="form-control"placeholder="0734*******"/>
  </div>

  <div class="col-md-5">
    <label for="inputAddress2" class="form-label">Home Address</label>
    <input onChange={(e)=>handle(e)} id="address"value={addProp.address} type="text" class="form-control"  placeholder="kinoo, z-corner"/>
  </div>
  <div class="col-md-4">
    <label for="inputAddress" class="form-label">Price</label>
    <input onChange={(e)=>handle(e)} id="price"value={addProp.price} type="number" class="form-control"  placeholder="$ 1000"/>
  </div>
  <div class="col-md-5">
    <label for="inputState" class="form-label">Property type</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Apartment</option>data
      <option>Townhouses</option>
      <option>Condos</option>
      <option>Mansions</option>
      <option>Cottage</option>
    </select>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Insuarance type</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Homeowners insurance</option>
      <option>Condo insurance</option>
      <option>Landlord insurance</option>
      
    </select>
  </div>
  
  
  <div class="col-12">
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Add property</button>
  </div>
</form>
            </div>
        </div>
    )
}

export default AddProperty