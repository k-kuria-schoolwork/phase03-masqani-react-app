import { Link } from "react-router-dom";
import logo from './images/logo3.png'


function NavBar (){
    return(
        <div className="cont1">
                  <h2 className="header1">MASQANI HEIGHTS</h2>
            <div >
                <img src={logo} alt="Logo" style={{width: '100px', height: 'auto'}} />
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