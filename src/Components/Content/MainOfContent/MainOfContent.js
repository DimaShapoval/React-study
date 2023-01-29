import React from "react";
import styles from "./MainOfContent.module.css"
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import SendPosts from "./SendPosts/SendPosts";


const MainOfContent = (props) =>{
    
   let posts = props.post;
    let postsData = posts.map((post)=>{
        return <Posts content={post.content} likesCount={post.likesCount} />;
    });

    return(
        <div className={styles.contentWrapper}>
            <div className={styles.secondContentWrapper} >
                <ProfileInfo className={styles.avatarWrapper}/>
                <div className={styles.sendPostWrapper}>
                    <SendPosts/>
                </div>
                {/* <div className={styles.newPostWrapper}>
                    <p>New Post</p>
                </div> */}
                <div className={styles.postsWrapper}>
                    {postsData}{/*  draw my array in jsx */} 
                    
                    {/* <Posts content={postData[0].content} likesCount={postData[0].likesCount}/>
                    <Posts content="I am freedom" likesCount="25"/>
                    <Posts content="Dmytro I love you" likesCount="34" />
                    <Posts content="I am a Front-end developer" likesCount={postData[4].likesCount} />
                    <Posts content="I am a Front-end developer" likesCount="1.2m" />
                    <Posts content="I am a Front-end developer" likesCount="1.2m" />
                    <Posts content="I am a Front-end developer" likesCount="1.2m" />
                    <Posts content="I am a Front-end developer" likesCount="1.2m" /> */}
                </div>
            </div>
        </div>
    )
}

export default MainOfContent;