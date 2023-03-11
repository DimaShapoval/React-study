import React from "react";
import { addMessageActionCreator, onMessageInputChangeActionCreator } from "../../../Redux/message-reducer";
import StoreContext from "../../../StoreContext";
import SendMessage from "./SendMessage";
import SendMessageButton from "./SendMessageButton/SendMessageButton";
import styles from "./style.module.css"


const SendMessageContainer = (props) => {
   
    return (
        <StoreContext.Consumer>
             {
            (store)=>{
                let state = store.getState().messagePage;
                let onInputChange = (text) => {
                    let action = onMessageInputChangeActionCreator(text)
                    store.dispatch(action);
                }
                let addMessage = () => {
                    let action = addMessageActionCreator()
                    store.dispatch(action)
                }
                return <SendMessage users={store.getState().messagePage.dialogs} messageValue={state.messageInputValue} onAddMessage={addMessage} onInputChange={onInputChange} />
            }}
            
        </StoreContext.Consumer>
    )
}

export default SendMessageContainer;