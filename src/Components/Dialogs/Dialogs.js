import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import MessagePage from "../MessagePage/MessagePage";
import Messages from "./Messages/Messages";
import SendMessage from "./SendMessage/SendMessage";
import styles from "./style.module.css"
import Users from "./Users/Users";

const Dialogs = (props) => {

    let dialogsData = props.user;
    let messageData = props.messages;
    let usersArray = dialogsData.map( (users) => {
        return <Users to={users.id} name={users.name} /> //create new elements by method map() it return new array with changes
    });
    let messageArray = messageData.map( (message) => {
        return <Messages message={message.message}/>
    } )

    return (
        <div className={styles.dialogsWrapper}>
           <div className={styles.secondDialogsWrapper}>
            
            <div className={styles.usersWrapper}>
                {usersArray} {/* it our tags, but like js array so we enter it in {} */}
            </div>
            <div className={styles.messagesWrapper} >
                    {messageArray}
                

            </div>
            </div> 
            <div className={styles.textareaWrapper}>
                <SendMessage dispatch={props.dispatch} messageValue={props.messageValue} users={props.user}/>
            </div>
           
        </div>
    )
}

export default Dialogs;