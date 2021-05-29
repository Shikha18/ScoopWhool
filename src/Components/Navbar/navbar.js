import React, {useState, useEffect} from 'react';
import style from './navbar.module.scss';
import Logo from '../../assests/logo.svg';
import Bookmark from '../../assests/bookmark.svg';
import Profile from '../../assests/profile.svg';
import Search from '../../assests/search.svg';
import Menu from '../../assests/menu.svg';


const Navbar = ({navBackground}) => {
    
    return (
        <div className={style.container} style={{background:navBackground}} >
            <ul>
                <img src={Logo} alt="logo"/>
                <li>TRENDING</li>
                <li>VIDEOS</li>
                <li>STORIES</li>
                <li>QUIZZES</li>
                <li>MEMES</li>
                <li>SPOTLIGHT</li>
            </ul>
            <ul>
                <img src={Bookmark} alt="Bookmark"/>
                <img src={Profile} alt="Profile"/>
                <img src={Search} alt="search"/>
                <img src={Menu} alt="menu"/>
            </ul>
        </div>
    )
}

export default Navbar;