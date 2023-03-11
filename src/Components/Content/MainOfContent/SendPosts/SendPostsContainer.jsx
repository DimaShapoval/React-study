import React from "react";
import { addPostActionCreator, updateNewTextActionCreator } from "../../../../Redux/profile-reduser";
import StoreContext from "../../../../StoreContext";
import SendPostButton from "./SendPostButton/SendPostButton";
import SendPosts from "./SendPosts";
import styles from "./style.module.css"



const SendPostsContainer = (props) => {

    
    return (
        <StoreContext.Consumer> 
            {
            (store) => {
                let state = store.getState().profilePage
                let clickForButton = () => {
                    // let action = addPostActionCreator();
                    store.dispatch(addPostActionCreator())
                } // function that add post and rerender DOM
                let onPostChange = (text) => {
                    // let action = updateNewTextActionCreator(text)
                    store.dispatch(updateNewTextActionCreator(text));
                }
               return <SendPosts postValue={state.newPostText} onAddPost={clickForButton} updateNewText={onPostChange} />
            }
        }
        </StoreContext.Consumer>
    )
}

export default SendPostsContainer;