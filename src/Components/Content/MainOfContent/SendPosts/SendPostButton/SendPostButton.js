import React from "react";
import styles from './style.module.css'



const SendPostButton = (props) =>{
    
    return(
        <div className={styles.buttonWrapper}>
            <button className={styles.button} onClick={props.click}>Send</button>
        </div>
    )
}

export default SendPostButton;