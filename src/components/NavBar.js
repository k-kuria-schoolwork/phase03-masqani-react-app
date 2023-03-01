import { Link } from "react-router-dom"

function NavBar (){
    return(
        <div className="cont1">
            <div >
            <h1 className="header1">Masqani Heights</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/services'>Services</Link>
                    </li>
                    <li>
                        <Link to='/contacts'>Contacts</Link>
                    </li>
                    <li>
                        <Link to='/pricing'>Pricing</Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}

export default NavBar