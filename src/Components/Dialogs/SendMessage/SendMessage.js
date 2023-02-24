import React from "react";
import { addMessageActionCreator, onMessageInputChangeActionCreator } from "../../../Redux/message-reducer";
import SendMessageButton from "./SendMessageButton/SendMessageButton";
import styles from "./style.module.css"


const SendMessage = (props) =>{
    let newValueOfTextArea = React.createRef()
    let selectOfFriend = React.createRef();
    let newUsers = props.users.map((elem)=>{
        return <option>{elem.name}</option>
    })
    let onInputChange = (event) =>{
        let text = event.target
        let action = onMessageInputChangeActionCreator(text)
        props.dispatch(action);
    }
    let addMessage = () =>{
        let action = addMessageActionCreator()
        props.dispatch(action)
    }
    return(
        <div className={styles.sendWrapper}>
            <select className={styles.selectUser} ref={selectOfFriend}>
                {newUsers}
            </select>
             <textarea onChange={onInputChange} ref={newValueOfTextArea} placeholder="Enter your message" value={props.messageValue}/>
             <div className={styles.sendButtonWrapper}>
                <SendMessageButton click={addMessage}/>
             </div>
        </div>
    )
}

export default SendMessage;