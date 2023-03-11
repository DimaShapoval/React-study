import React from "react";
import { addMessageActionCreator, onMessageInputChangeActionCreator } from "../../../Redux/message-reducer";
import SendMessage from "./SendMessage";
import SendMessageButton from "./SendMessageButton/SendMessageButton";
import styles from "./style.module.css"


const SendMessageContainer = (props) =>{
    let onInputChange = (text) =>{
        let action = onMessageInputChangeActionCreator(text)
        props.dispatch(action);
    }
    let addMessage = () =>{
        let action = addMessageActionCreator()
        props.dispatch(action)
    }
    return(
        <SendMessage users={props.users} messageValue={props.messageValue} onAddMessage={addMessage} onInputChange={onInputChange} />
    )
}

export default SendMessageContainer;