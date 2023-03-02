import { Link } from "react-router-dom";
import logo from './images/logo.png';


function NavBar (){
    return(
        <div className="cont1">
            <img src={logo} alt="My logo" style={{ width: '150px', height: 'auto' ,}} />
            <div >
            
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
                        <Link to='/cart'>Cart</Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}

export default NavBar