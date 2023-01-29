import React from "react";
import SendPostButton from "./SendPostButton/SendPostButton";
import styles from "./style.module.css"


const SendPosts = (props) =>{
    
    let newPostValue = React.createRef();
    
    let clickForButton = () => {
        let text = newPostValue.current;
        console.log(props.addPost);
       props.addPost(text.value)
    }
    return(
        <div className={styles.postWrapper}>
            <div className={styles.secondPostWrapper}>
                <div className={styles.headerWrapper}>
                    <p className={styles.headerText}>My Posts</p>
                </div>
                <div className={styles.contantWrapper} >
                    <textarea className={styles.contantInput} placeholder="Enter your new post" ref={newPostValue} ></textarea>
                </div>
                <div className={styles.sendButtonWrapper}>
                    <SendPostButton  click={clickForButton} />
                </div>
            </div>
        </div>
    )
}

export default SendPosts;