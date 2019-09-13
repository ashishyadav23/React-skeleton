import React from 'react';
import kisshtLogo from '../../assets/images/Kissht-logo.svg';
import classes from './Header.module.css';
const Header = () => {
    return (<div className={classes.Logo}><img src={kisshtLogo} width={window.screen.availWidth > 450 ? 125 : 230} alt="logo" /></div>
    )
}
export default Header