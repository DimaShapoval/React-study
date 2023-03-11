import React from "react";
import { addMessageActionCreator, onMessageInputChangeActionCreator } from "../../../Redux/message-reducer";
import SendMessageButton from "./SendMessageButton/SendMessageButton";
import styles from "./style.module.css"


const SendMessage = (props) =>{
    // let newValueOfTextArea = React.createRef()
    // let selectOfFriend = React.createRef();
    let newUsers = props.users.map((elem)=>{
        return <option>{elem.name}</option>
    })
    let onInputChange = (event) =>{
        let text = event.target
        props.onInputChange(text)
    }
    let addMessage = () =>{
        let action = addMessageActionCreator()
        props.dispatch(action)
    }
    return(
        <div className={styles.sendWrapper}>
            <select className={styles.selectUser} >
                {newUsers}
            </select>
             <textarea onChange={onInputChange} placeholder="Enter your message" value={props.messageValue}/>
             <div className={styles.sendButtonWrapper}>
                <SendMessageButton click={props.onAddMessage}/>
             </div>
        </div>
    )
}

export default SendMessage;