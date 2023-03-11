import React from "react";
import { addPostActionCreator, updateNewTextActionCreator } from "../../../../Redux/profile-reduser";
import SendPostButton from "./SendPostButton/SendPostButton";
import SendPosts from "./SendPosts";
import styles  from "./style.module.css"



const SendPostsContainer = (props) =>{
    
    let clickForButton = () => {
        let action = addPostActionCreator();
       props.dispatch(action)
    } // function that add post and rerender DOM
    let onPostChange = (text)=>{
        let action = updateNewTextActionCreator(text)
        props.dispatch(action);
    }
    return(<SendPosts postValue={props.postValue} onAddPost={clickForButton} updateNewText={onPostChange}/>)
}

export default SendPostsContainer;