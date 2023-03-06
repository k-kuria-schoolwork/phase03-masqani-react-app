import React from "react"
import flat01 from './images/flat1.jpg'
import flat02 from './images/flat7.jpg'
import flat03 from './images/flat3.jpg'
import flat11 from './images/flat11.jpg'
import flat10 from './images/flat10.jpg'




function Home(){
    return(
      <div>
        <div>
            <img className="img1" src={flat01} alt='apartment'></img>
            <div className="homecontent">
                <div className="homeinnercont">
                    <h1 className="headtopic">WELCOME TO MASQANI REAL ESTATE COMPANY</h1>
                    <p className="P1">WHERE LUXURY IS PERSONAL</p>
                    <p>Our mission is to provide the best possible real estate services to our clients, with integrity, professionalism, and attention to detail.</p>
                    
                </div>
            </div>
            <div className="aboutheader">
            <h1 className="abouth1">We bring your dream home to reality</h1>
              <p className="pbout">Our mission is to provide the best possible real estate services to our clients, with integrity, professionalism, and attention to detail.</p>
              <p className="pbout">At our company, we pride ourselves on providing exceptional service to our clients in finding their dream homes. Whether you're buying, selling, or renting, we're here to help.</p>
              <p className="pbout">Take a look at our featured properties below, or use our search bar to find properties that fit your specific needs.</p>
            </div>

            <div className="About ">
                <h2 className="offer">------WHAT WE OFFER-----</h2>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={flat11}  class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src={flat02} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src={flat03}  class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src={flat10}  class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                     </button>

            </div>
            </div>
          <div  className="services">
            <p>-------WORK FLOW------</p>
            <h2>SERVICES</h2>
          </div>
                <div class="row row-cols-1 row-cols-md-4  g-4">
                <div class="col">
                    <div class="card h-100 ">
                    <div class="card-body">
                        <h5 class="card-title">Evaluate Property</h5>
                        <p class="card-text">Find properties listed in our website and choose the one that grasps your attention</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Meet Your Agent</h5>
                        <p class="card-text">Communicate with the agents involved through their contacts listed in the property</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Close The Deal</h5>
                        <p class="card-text">Meet with agent and pass through the legal process to attain desired property</p>
                    </div>
                    </div>
                </div> 
                <div class="col">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Have Your Property</h5>
                        <p class="card-text">Ownership is transfered and the you the customer takes control of the property</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div className="footer">
            <h5 className="awards">Our Awards
             <p>Over 1,240,000+ Happy Users Being With Us Still They Love Our Services </p>
            </h5> 
                <div className="footercont">
                    <h5 className="layout">LAYOUT PAGES
                        <p>Home Page</p>
                        <p>Property Page</p>
                        <p>AddProperty Page</p>
                    </h5> 
                    <h5>CONTACT INFO
                    <p> Get in touch through our social media platforms</p>
                    <p><span>Instagram@</span>masQani_heights </p>
                    <p><span>Twitter@ </span> masQani_heights </p>
                    </h5>
                    <h5>chat with us  throgh email and phone number
                    <p><span>Phone </span>+2766-456-773 </p>
                    <p><span>Phone </span>+2766-456-773 </p>
                    </h5>

                
                </div>
                <div className="copyright">
                      <h5>Copyright @2023 All Rights  Reserved | MAQANI REAL ESTATE.</h5>
                 </div>
            </div>
        </footer>
      
</div>
    )
}

export default Home
