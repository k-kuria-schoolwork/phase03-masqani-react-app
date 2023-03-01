import React from "react"

function AddProperty(){
    return(
        <div>
            <div  className="addheader1">
             ADD PROPERTY IN THIS PAGE
             </div>
            <div className="formcont">
            <form class="row g-3">
            <div class="col-md-5">
    <label for="inputAddress" class="form-label">Agent Name</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Kamau Njiruu"/>
  </div>

  <div class="col-md-4">
    <label for="inputAddress2" class="form-label">Agent Number</label>
    <input type="number" class="form-control" id="inputAddress2" placeholder="0734*******"/>
  </div>
  <div class="col-md-5">
    <label for="inputAddress2" class="form-label">City</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Banana town"/>
  </div>
  <div class="col-md-4">
    <label for="inputAddress2" class="form-label">Home Address</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="kinoo, z-corner"/>
  </div>
  <div class="col-md-5">
    <label for="inputAddress" class="form-label">Price</label>
    <input type="number" class="form-control" id="inputAddress" placeholder="$ 1000"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Property type</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Apartment</option>
      <option>Townhouses</option>
      <option>Condos</option>
      <option>Mansions</option>
      <option>Cottage</option>
    </select>
  </div>
  <div class="col-md-5">
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