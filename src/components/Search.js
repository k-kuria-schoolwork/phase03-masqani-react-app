import React from 'react'

 function Search (){

    return (
        <>
          <section className='hero'>
            <div className='container'>
              <h1>Search Your Next Home</h1>  
            
              <form className='flex'>
                <div className='box'>
                  <span>City/Street</span>
                  <input type='text' placeholder='Location' />
                </div>
                <div className='box'>
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
                </div>
                <div className='box'>
                  <span>Price</span>
                  <input type='number' placeholder='Enter the price' />
                </div>
                <div>
                <button className='btn1'>
                  Search
                </button>
                </div>
              </form>
            </div>
          </section>
        </>
      )

}
export default Search
