import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return(
        <Wrapper>
            <p>Client-Side Authentication - Marsh 2020</p>
            <p>Advanced Web Application</p>
            <p>By Kabandangi Kanangila - WEBPT12</p>
            <a href="https://github.com/danielkanangila/Auth-Friends">
                <i className="fab fa-github-square"></i>
                Project Repository
            </a> 
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    width: 100;
    background-color: #212121;
    color: #fff;
    padding: 50px 0;
    text-align: center;
    p {
        line-height: 1.5;
        &:first-child {
            font-size: 1.4rem
        }
    }
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        margin-top: 8px;
        i {
            font-size: 2rem;
            margin-right: 10px;
        }
    }
`;

export default Footer;