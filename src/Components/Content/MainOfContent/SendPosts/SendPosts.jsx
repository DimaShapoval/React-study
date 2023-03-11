import React from "react";
import { addPostActionCreator, updateNewTextActionCreator } from "../../../../Redux/profile-reduser";
import SendPostButton from "./SendPostButton/SendPostButton";
import styles  from "./style.module.css"



const SendPosts = (props) =>{
    
    let newPostValue = React.createRef(); // create id like document.getElementById() for textarea
    // let onClickForButton = () => {
    //     let text = newPostValue.current; //method current give us possibility to work with element how in vanilla js
    //     let action = addPostActionCreator();
    // } // function that add post and rerender DOM
    let onPostChange = (event)=>{
        let text = event.target;
        props.updateNewText(text)
    }
    return(
        <div className={styles.postWrapper}>
            <div className={styles.secondPostWrapper}>
                <div className={styles.headerWrapper}>
                    <p className={styles.headerText}>My Posts</p>
                </div>
                <div className={styles.contantWrapper} >
                    <textarea className={styles.contantInput} onChange={onPostChange} value={props.postValue}
                     placeholder="Enter your new post" ref={newPostValue} />
                </div>
                <div className={styles.sendButtonWrapper}>
                    <SendPostButton  click={props.onAddPost} />
                </div>
            </div>
        </div>
    )
}

export default SendPosts;