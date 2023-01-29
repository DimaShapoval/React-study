import React from "react";
import styles from "./style.module.css"

const ProfileInfo = () => {
    return (
        <div className={styles.secondContentWrapper} >
            <div className={styles.avatarWrapper} >
                <img className={styles.avatarImage} src="https://i.pinimg.com/736x/d5/0d/7d/d50d7d823673f8c4abaeab420fc4dbfd.jpg" />
            </div>
            <div className={styles.rightContentWrapper} >
                <p className={styles.textOfContent}>LLLL</p>
            </div>
        </div>
    )
}

export default ProfileInfo;