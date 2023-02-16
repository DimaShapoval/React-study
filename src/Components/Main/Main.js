import React from "react";
import Content from "../Content/Content";
import Dialogs from "../Dialogs/Dialogs";
import Nav from "../Nav/Nav";
import styles from "./style.module.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Music from "../Music/Music";
import News from "../News/News"
import Friends from "../Friends/Friends";
import MessagePage from "../MessagePage/MessagePage";



const Main = (props) => {
   let dialogPath = props.users.map((user) =>{
    return "/dialogs/" + user.id
   })

console.log(dialogPath);
    return (
        <BrowserRouter>
        <div className={styles.mainWrapper}>
            <div className={styles.mainSecondWrapper}>
                
                    <Nav friend={props.friend} className={styles.nav} />
                
                
                <div className={styles.contentWrapper} >
                    <Routes>
                        <Route path="/profile/*" element={<Content className={styles.content} dispatch={props.dispatch} postValue={props.postValue} post={props.post} />} />
                        <Route path="/dialogs/*" element={<Dialogs dispatch={props.dispatch} messageValue={props.messageValue} user={props.users} messages={props.messages}/>}  />
                        {/* <Route path={dialogPath} element={<MessagePage/>}/> */}
                        <Route path="/music/*" element={<Music/>} />
                        <Route path="/news/*" element={<News/>} />
                        <Route path="/friends/*" element={<Friends/>} />
                        {/* <Content className={styles.content} /> */}
                        {/* <Dialogs /> */}
                    </Routes>


                </div>
                

            </div>
        </div>
        </BrowserRouter>
    )
}

export default Main;