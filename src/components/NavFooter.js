import React from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import { FaHome, FaSearch, FaRegPlayCircle, FaShoppingBag, FaUserCircle } from 'react-icons/fa';

const Wrapper = styled.div`
    position: sticky;
    bottom: 0;
    right: 0;
    left: 0;
    background: #ffffff;
    margin-top: 20px;
`;

function NavFooter() {
    return (
        <Wrapper>
            <Menu mode="horizontal">
                <nav className="footer">
                    <ul className="menu-footer">
                        <li><a href="#"><FaHome style={{ color: 'black', fontSize: '20px' }} /></a></li>
                        <li><a href="#"><FaSearch style={{ color: 'black', fontSize: '20px' }} /></a></li>
                        <li><a href="#"><FaRegPlayCircle style={{ color: 'black', fontSize: '20px' }} /></a></li>
                        <li><a href="#"><FaShoppingBag style={{ color: 'black', fontSize: '20px' }} /></a></li>
                        <li><a href="#"><FaUserCircle style={{ color: 'black', fontSize: '20px' }} /></a></li>
                    </ul>
                </nav>
            </ Menu>
        </Wrapper>
    )
}

export default NavFooter




