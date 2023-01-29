import React from "react";
import styles from './style.module.css'




const Posts = (props) => {
   
    return(
        <div className={styles.postsWrapper}>
            <div className={styles.avatarWrapper}>
                <img className={styles.avata} src="https://i.pinimg.com/736x/d5/0d/7d/d50d7d823673f8c4abaeab420fc4dbfd.jpg" />
            </div>
            <div className={styles.postContentWrapper}>
                <div className={styles.postContentScondWrapper}>
                <p className={styles.postContent}>{props.content}</p>

                </div>
                
                <div className={styles.likeWrapper}>
                <div className={styles.secondLikesWrapper}>
                    <img  src="https://cdn.icon-icons.com/icons2/1744/PNG/512/3643770-favorite-heart-like-likes-love-loved_113432.png" className={styles.likes} />
                    <p className={styles.likeCount}>{props.likesCount}</p>
                </div>
                
            </div>
                
            </div>
            
            
          
        </div>
    )
}

export default Posts;