import React from "react";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";



const Nav = (props) => {
        let friendData = props.fiend;
        // let friendsComponent

        return (  
        <nav className={styles.navWrapper}>
            <div className={styles.navSecondWrapper} >
                <div className={`${styles.navLinkWrapper} `} >
                        <NavLink to="/profile" className={ change => change.isActive ? styles.active : styles.navLinks} >Profile</NavLink>

                </div>
                
                <div className={styles.navLinkWrapper} >
                    <NavLink to="/news" className={ change => change.isActive ? styles.active : styles.navLinks} >News</NavLink>

                </div>
                <div className={styles.navLinkWrapper} >
                    <NavLink to="/dialogs" className={ change => change.isActive ? styles.active : styles.navLinks} >Message</NavLink>

                </div>
                <div className={styles.navLinkWrapper} >
                    <NavLink to="/music" className={ change => change.isActive ? styles.active : styles.navLinks}>Music</NavLink>

                </div>
                <div className={styles.navLinkWrapper} >
                    <NavLink to="/friends" className={ change => change.isActive ? styles.active : styles.navLinks}>Friends</NavLink>
                    <div className={styles.cyclesWrapper}>
                        <div className={styles.cycle}></div>
                        <div className={styles.cycle}></div>
                        <div className={styles.cycle}></div>
                    </div>
                    <div className={styles.friendWrapper}>
                        {friendData}
                    </div>

                </div>
                
                <div className={styles.navLinkWrapper} >
                    <NavLink to="/" className={ change => change.isActive ? styles.active : styles.navLinks} >Settings</NavLink>

                </div>


            </div>

        </nav >
    )
}

export default Nav;