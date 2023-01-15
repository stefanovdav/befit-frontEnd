import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';


export const Navbar = () => {
    const [username, setUsername] = useState(localStorage.getItem('username') || 'David');
    const [avatarUrl, setAvatarUrl] = useState(localStorage.getItem('avatarUrl') || 'https://www.w3schools.com/howto/img_avatar.png');

    return (
        <nav className='navbar navbar-dark main-color bg-dark py-4'>
            <div className='container-fluid'>
                <span className='navbar-brand active'>BeFit.</span>
                <div className="navbar-nav" style={{ gap: "8px" }}>
                    {window.location.pathname === '/mainPage' ?
                        <img src={avatarUrl} alt="Avatar" style={{ width: "120px" }} />
                        : null}
                    {window.location.pathname === '/mainPage' ?
                        <span style={{ color: "white", float: 'right', marginRight: '10px', alignSelf: "center", fontWeight: "bold" }}>{username}</span>
                        : null}
                </div>
                <button className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown'
                    aria-expanded='false'
                    aria-label='Toggle Navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse ' id='navbarNavDropdown' >
                    <ul className='navbar-nav'>
                        {window.location.pathname === '/login' ? <li className='nav-item'>
                            <Link className="nav-link btn btn-outline-light active" style={{ color: 'black', fontWeight: 'bold', width: '15%' }} to="/homePage" onClick={() => window.location.replace("/homePage")}>Home</Link>
                        </li> : null}
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        {window.location.pathname === '/homePage' ? <li className='nav-item m-1 '>
                            <Link className="nav-link btn btn-outline-light active" style={{ color: 'black', fontWeight: 'bold', width: '15%' }} to="/login" onClick={() => window.location.replace("/login")}>Sign In</Link>
                        </li> : null}
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        {window.location.pathname === '/mainPage' ? <li className='nav-item m-1 allignNavbuttonCenter'>
                            <Link className="nav-link btn btn-outline-light active" style={{ color: 'black', fontWeight: 'bold', width: '60%' }} to="#" onClick={() => window.location.replace("#")}>Create Post</Link>
                        </li> : null}
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        {window.location.pathname === '/mainPage' ? <li className='nav-item m-1 allignNavbuttonCenter'>
                            <Link className="nav-link btn btn-outline-light active" style={{ color: 'black', fontWeight: 'bold', width: '60%' }} to="#" onClick={() => window.location.replace("#")}>Join Group</Link>
                        </li> : null}
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        {window.location.pathname === '/mainPage' ? <li className='nav-item m-1 allignNavbuttonCenter'>
                            <Link className="nav-link btn btn-outline-light active" style={{ color: 'black', fontWeight: 'bold', width: '60%' }} to="#" onClick={() => window.location.replace("#")}>Create Group</Link>
                        </li> : null}
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        {window.location.pathname === '/mainPage' ? <li className='nav-item m-1 allignNavbuttonCenter'>
                            <Link className="nav-link btn btn-outline-light active" style={{ color: 'black', fontWeight: 'bold', width: '60%' }} to="#" onClick={() => window.location.replace("#")}>Change Avatar</Link>
                        </li> : null}
                    </ul>

                    <ul className='navbar-nav ms-auto'>
                        {window.location.pathname === '/mainPage' ? <li className='nav-item m-1 allignNavbuttonCenter'>
                            <Link className="nav-link btn btn-outline-light active" style={{ color: 'black', fontWeight: 'bold', width: '60%' }} to="#" onClick={() => window.location.replace("#")}>Memories</Link>
                        </li> : null}
                    </ul>
                    <ul className='navbar-nav ms-auto' >
                        {window.location.pathname === '/mainPage' ? <li className='nav-item m-1 allignNavbuttonCenter' >
                            <Link
                                className="nav-link btn btn-outline-light active"
                                style={{ color: 'black', fontWeight: 'bold', width: '60%' }}
                                to="/homePage"
                                onClick={() => {
                                    localStorage.clear();
                                    window.location.replace("/homePage");
                                }}
                            >Log Out</Link>
                        </li> : null}
                    </ul>
                </div>
            </div>
        </nav>
    );
}