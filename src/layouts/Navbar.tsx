import { left } from "@popperjs/core";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {


    return (
        <nav className='navbar navbar-dark main-color bg-dark py-4'>
            <div className='container-fluid'>
                <span className='navbar-brand active'>BeFit.</span>
                <div className="navbar-nav" style={{ gap: "8px" }}>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ width: "120px" }} />
                    <span style={{ color: "white", float: 'right', marginRight: '10px', alignSelf: "center", fontWeight: "bold" }}>David</span>
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
                            <Link className="nav-link btn btn-outline-light active" style={{ color: 'black', fontWeight: 'bold', width: '60%' }} to="#" onClick={() => window.location.replace("#")}>Change</Link>
                        </li> : null}
                    </ul>

                    <ul className='navbar-nav ms-auto'>
                        {window.location.pathname === '/mainPage' ? <li className='nav-item m-1 allignNavbuttonCenter'>
                            <Link className="nav-link btn btn-outline-light active" style={{ color: 'black', fontWeight: 'bold', width: '60%' }} to="#" onClick={() => window.location.replace("#")}>Memories</Link>
                        </li> : null}
                    </ul>
                    <ul className='navbar-nav ms-auto' >
                        {window.location.pathname === '/mainPage' ? <li className='nav-item m-1 allignNavbuttonCenter' >
                            <Link className="nav-link btn btn-outline-light active " style={{ color: 'black', fontWeight: 'bold', width: '60%' }} to="#" onClick={() => window.location.replace("#")}>Log Out</Link>
                        </li> : null}
                    </ul>
                </div>
            </div>
        </nav>
    );
}