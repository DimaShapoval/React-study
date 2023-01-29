import React from "react";
import SendPostButton from "./SendPostButton/SendPostButton";
import styles from "./style.module.css"


const SendPosts = () =>{
    return(
        <div className={styles.postWrapper}>
            <div className={styles.secondPostWrapper}>
                <div className={styles.headerWrapper}>
                    <p className={styles.headerText}>My Posts</p>
                </div>
                <div className={styles.contantWrapper} >
                    <input className={styles.contantInput} ></input>
                </div>
                <div className={styles.sendButtonWrapper}>
                    <SendPostButton />
                </div>
            </div>
        </div>
    )
}

export default SendPosts;