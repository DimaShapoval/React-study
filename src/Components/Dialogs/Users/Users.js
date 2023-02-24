import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import MessagePage from "../../MessagePage/MessagePage";
import styles from "./style.module.css"


const Users = (props) =>{
    let path = "" + props.to;
    return(
        <div className={styles.users}>
            <div className={styles.userNameWrapper}>
                <NavLink to={path} className={ change => change.isActive ? styles.userActive : styles.userName }
                 // this function make to state for button active and none it change class for our button
                >{props.name}</NavLink>
                 <Routes>
                    <Route path={ "" + props.user} element={<MessagePage/>} />
                 </Routes>
            </div>
        </div>
    )
}

export default Users;