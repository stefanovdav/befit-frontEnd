import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Navbar } from 'reactstrap';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import avatar from '../../images/testImages/face.jpeg';

class SideMenu extends Component {
    render() {
        return (
            <div className="sidebar-container">
                <Navbar dark expand="md" className="sidebar-menu">
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className="navbar-brand" to="/">
                                <Image
                                    className="avatar"
                                    src={avatar}
                                    alt="User Avatar"
                                    fluid />
                                <span className="username">Username</span>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/create-post">
                                Create Post
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/join-group">
                                Join Group
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/create-group">
                                Create Group
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/log-out">
                                Log Out
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default SideMenu;