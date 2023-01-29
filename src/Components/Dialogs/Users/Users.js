import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css"


const Users = (props) =>{
    let path = "/dialogs/" + props.to;
    return(
        <div className={styles.users}>
            <div className={styles.userNameWrapper}>
                <NavLink to={path} className={ change => change.isActive ? styles.userActive : styles.userName }>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default Users;