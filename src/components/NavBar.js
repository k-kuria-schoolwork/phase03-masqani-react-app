import { Link } from "react-router-dom"

function NavBar (){
    return(
        <div className="cont1">
            <div >
            <h1 className="header1">Masqani </h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                   
                    <li>
                        <Link to='/propertylistings'>Properties</Link>
                    </li>
                    <li>
                        <Link to='/addproperty'>AddProperty</Link>
                    </li>
                   
                    <li>
                        <Link to='/reviews'>Reviews</Link>
                    </li>

                    <li>
                        <Link to='/cart'>Cart</Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}

export default NavBar