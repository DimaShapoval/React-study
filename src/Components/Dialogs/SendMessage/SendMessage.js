import React from "react";
import {  addMessageActionCreator, onMessageInputChangeActionCreator } from "../../../Redux/State";
import SendMessageButton from "./SendMessageButton/SendMessageButton";
import styles from "./style.module.css"


const SendMessage = (props) =>{
    let newValueOfTextArea = React.createRef()
    let selectOfFriend = React.createRef();
    let newUsers = props.users.map((elem)=>{
        return <option>{elem.name}</option>
    })
    let onInputChange = () =>{
        let text = newValueOfTextArea.current
        let action = onMessageInputChangeActionCreator(text)
        props.dispatch(action);
    }
    let addMessage = () =>{
        let text = newValueOfTextArea.current
        let select = selectOfFriend.current
        let action = addMessageActionCreator(text, select)
        props.dispatch(action)
    }
    return(
        <div className={styles.sendWrapper}>
            <select className={styles.selectUser} ref={selectOfFriend}>
                {newUsers}
            </select>
             <textarea onChange={onInputChange} ref={newValueOfTextArea}>{props.messageValue}</textarea>
             <div className={styles.sendButtonWrapper}>
                <SendMessageButton click={addMessage}/>
             </div>
        </div>
    )
}

export default SendMessage;