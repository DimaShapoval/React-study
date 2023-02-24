import React from "react";
import { addPostActionCreator, updateNewTextActionCreator } from "../../../../Redux/profile-reduser";
import SendPostButton from "./SendPostButton/SendPostButton";
import styles  from "./style.module.css"



const SendPosts = (props) =>{
    
    let newPostValue = React.createRef(); // create id like document.getElementById() for textarea
    let clickForButton = () => {
        let text = newPostValue.current; //method current give us possibility to work with element how in vanilla js
        let action = addPostActionCreator();
       props.dispatch(action)
    } // function that add post and rerender DOM
    let onPostChange = ()=>{
        let text = newPostValue.current;
        let action = updateNewTextActionCreator(text)
        props.dispatch(action);
        console.log(text.value);
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
                    <SendPostButton  click={clickForButton} />
                </div>
            </div>
        </div>
    )
}

export default SendPosts;