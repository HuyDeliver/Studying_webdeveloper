import React from "react";
import './Nav.scss'
import {
    Link, NavLink
} from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (
            <div class="topnav">
                <NavLink activeClassName="active" to="/" exact={true}>Home</NavLink>
                <NavLink to="/todo">Todo</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/users">Users</NavLink>
            </div>
        )
    }
}

export default Nav