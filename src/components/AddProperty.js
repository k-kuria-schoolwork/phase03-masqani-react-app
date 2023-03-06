import React, { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddProperty(){

  const notify = () => toast.info("Property added successfully!",{position:"bottom-right",theme:"dark",});


  const [addProp, setAddProp] = useState({
    name:"",
    number:"",
    city:"",
    address:"",
    price:"",
    description:"",
  },[])


  //post method to send new data to server
  function handleSubmit(e){
    e.preventDefault();
    console.log(addProp)
  }


  function handleInput(e){
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
          
            <form onSubmit={(e)=>handleSubmit(e)} class="row g-3">
            <div class="col-md-5">
    <label for="inputAddress" class="form-label">Agent Name</label>
    <input onChange={(e)=>handleInput(e)} id="name"value={addProp.name} type="text" class="form-control"  placeholder="Kamau Njiruu"/>
  </div>

  <div class="col-md-4">
    <label for="inputAddress2" class="form-label">Agent Number</label>
    <input onChange={(e)=>handleInput(e)} id="number"value={addProp.number} type="number" class="form-control"placeholder="0734*******"/>
  </div>

  <div class="col-md-5">
    <label for="inputAddress2" class="form-label">Home Address</label>
    <input onChange={(e)=>handleInput(e)} id="address"value={addProp.address} type="text" class="form-control"  placeholder="kinoo, z-corner"/>
  </div>
  <div class="col-md-4">
    <label for="inputAddress" class="form-label">Price</label>
    <input onChange={(e)=>handleInput(e)} id="price" value={addProp.price} type="number" class="form-control"  placeholder="$ 1000"/>
  </div>
  
  <div class="col-md-5">
  <label for="exampleFormControlTextarea1" class="form-label">Propertyyyyyy description</label>
  <textarea onChange={(e)=>handleInput(e)} class="form-control" id="description" value={addProp.description} rows="3" placeholder="2-bedroom, open kitchen"></textarea>
</div>
  
  
  
  <div class="col-12">
    <button type="submit" onClick={notify} class="btn btn-primary">Add property</button>
  <ToastContainer />
  </div>
</form>
            </div>
        </div>
    )
}

export default AddProperty