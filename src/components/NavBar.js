import { Link } from "react-router-dom";
// import logo from './images/logo.png';


function NavBar (){
    return(
        <div className="cont1">
            <div >
            <h2 className="header1">MASQANI HEIGHTS</h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                   
                    <li>
                        <Link to='/properties'>Properties</Link>
                    </li>
                    <li>
                        <Link to='/addproperty'>AddProperty</Link>
                    </li>
                    <li>
                        <Link to='/search'>Search</Link>
                    </li>
                    
                </ul>
            </nav>
            
        </div>
    )
}

export default NavBar