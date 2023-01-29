import React from "react";
import styles from "./style.module.css"

const Messages = (props) =>{
    return(
        <div className={styles.messageSecondWrapper}>
            <p className={styles.message}>{props.message}</p>
        </div>
    )
}

export default Messages;