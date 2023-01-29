import React from "react";
import styles from './style.module.css'



const SendPostButton = () =>{
    function clickForButton(){
        console.log("LOL");
    }
    return(
        <div className={styles.buttonWrapper}>
            <button className={styles.button} onClick={clickForButton}>Send</button>
        </div>
    )
}

export default SendPostButton;