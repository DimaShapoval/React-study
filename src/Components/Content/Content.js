import React from "react";
import Dialogs from "../Dialogs/Dialogs";
import MainOfContent from "./MainOfContent/MainOfContent";
import styles from "./style.module.css";

const Content = (props) => {
    
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.contentSecondWrapper} >
                <div className={styles.imageWrapper} >
                    <img className={styles.mainImage} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cover-photo%2Cbackground%2C-technology-design-template-708b0881e40d33376afe161e5a38d9bc_screen.jpg?ts=1593459050" />
                </div>
                <div className={styles.mainOfContentWrapper}>
                    <MainOfContent dispatch={props.dispatch} postValue={props.postValue} post={props.post} className={styles.firstRow} />
                </div>
            </div>
        </div>
    )
}

export default Content;