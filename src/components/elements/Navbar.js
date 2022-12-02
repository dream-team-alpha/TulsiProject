
import './Navbar.css';
import Logo from '../images/Tulsi-Logo.png';

import { Link } from 'react-router-dom';



export default function Navbar () {
    return (
        <>
            <div className="row nav">
                <div className="col-md-4 nav-logo">
                    <img src={Logo} />
                </div>
                <div className="col-md-8 nav-items">

                        {/* Navigation bar */}
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page"  href="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link" to='/contect'>Contact</Link>
                                
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/price'>Price</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/Service'>Service</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to='/blog'>Blog</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <Link className="nav-button-login" to='/login'>Login</Link>
                            </form>
                        </div>
                        </div>
                    </nav>


                </div> 
            </div>
        </>
    );
}