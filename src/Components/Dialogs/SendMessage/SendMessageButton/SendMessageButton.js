import React from "react";
import styles from "./style.module.css"

const SendMessageButton = (props) =>{
    return(
        <div className={styles.sendButtonWrapper}>
            <button onClick={props.click} className={styles.sendButton}>Send</button>
        </div>
    )
}

export default SendMessageButton;