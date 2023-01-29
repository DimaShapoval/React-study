import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Messages from "./Messages/Messages";
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
            <div className={styles.usersWrapper}>
                {usersArray} {/* It is same that under of this array */}
                {/* <Users to={dialogsData[0].id} name={dialogsData[0].name} />
                    <Users to={dialogsData[1].id} name={dialogsData[1].name} />
                    <Users to={dialogsData[2].id} name={dialogsData[2].name} /> */}
            </div>
            <div className={styles.messagesWrapper} >
                    {messageArray}
                {/* <Messages message={messageData[0].message} />
                <Messages message={messageData[1].message} />
                <Messages message={messageData[2].message} /> */}


            </div>
        </div>
    )
}

export default Dialogs;