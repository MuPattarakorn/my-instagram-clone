import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/img/Logo.png';
import { Menu } from 'antd';
import { FaRegPlusSquare, FaRegHeart, FaFacebookMessenger } from 'react-icons/fa';
import UploadFile from './UploadFile';

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background: #ffffff;
    padding-left:33.33%; 
    padding-right:33.33%;
`;

const NavHeader = styled.nav`
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
`

const NavLogo = styled.img`
  width: auto;
  object-fit: contain;
`;

const Menus = styled.li`
    display: inline;
    margin-left: 12px;
`

function Navbar() {
    return (
        <Wrapper>
            <Menu mode="horizontal">
                <NavHeader>
                    <NavLogo src={Logo} alt={'Instagram Logo'} />
                    <ul className="menus-header space-between">
                        <Menus><UploadFile /></Menus>
                        <Menus><a href="#"><FaRegHeart style={{ color: 'black', fontSize: '20px' }} /></a></Menus>
                        <Menus><a href="#"><FaFacebookMessenger style={{ color: 'black', fontSize: '20px' }} /></a></Menus>
                    </ul>
                </NavHeader>
            </ Menu>
        </Wrapper>
    )
}

export default Navbar
