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
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-5">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-md-4">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-5">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
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