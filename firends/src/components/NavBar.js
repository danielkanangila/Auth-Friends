import React from "react";
import styled from 'styled-components';
import { NavLink, Redirect } from "react-router-dom";
import { Container } from "./styled-components";

const NavBar = () => {
    const logout = e => {
        e.preventDefault()
        localStorage.removeItem("token");
        window.location = "/login";
    }
    return(
        <Toolbar>
            <Container>
                {!localStorage.getItem("token") &&
                    <NavLink activeClassName="active" to="/login">Sign in</NavLink>   
                }
                {localStorage.getItem("token") && 
                    <>
                        <NavLink activeClassName="active" to="/friends">Friends</NavLink>
                        <NavLink activeClassName="active" onClick={logout} to="/logout">Logout</NavLink>
                    </>
                }
            </Container>
        </Toolbar>
    )
}

const Toolbar = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 85px;
    box-shadow: 1px 1px 10px -1px rgba(0,0,0,0.25);
    background-color: #512da8;
    h1 {
        padding: 15px 15px;
    }
    a {
        color: #fff;
        padding: 33px 15px;
        transition: .3s;
        &:hover, &.active {
            background-color: #fff;
            color: #512da8;
        }
    }
`

export default NavBar;