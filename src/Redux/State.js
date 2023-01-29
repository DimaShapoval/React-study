import { rerenderDOM } from "../render";

let State = {
    profilePage: {
        
        posts: [
            { content: "Hi lol", likesCount: 1, id: 1 },
            { content: "I am freedom", likesCount: 25, id: 2 },
            { content: "Dmytro I love you", likesCount: 34, id: 3 },
            { content: "I am a Front-end developer", likesCount: 1.2 + "m", id: 4 },
            { content: "I am a Front-end developer", likesCount: 1.2 + "m", id: 5 },
            { content: "I am a Front-end developer", likesCount: 1.2 + "m", id: 6 },
            { content: "I am a Front-end developer", likesCount: 1.2 + "m", id: 7 },
        ]
    },
    messagePage: {
        dialogs: [
            { id: 1, name: "Anton" },
            { id: 2, name: "Dmytro" },
            { id: 3, name: "Nastya" }
        ],
        message: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "Are you here?" },
        ]
    },
    navBar: {
        friend: [
            {id: 1, name: "Igor"},
            {id: 2, name: "Vika"},
            {id: 3, name: "Sveta"},
        ]
    }
}
export let addPost = (postMessage)=>{
    
    let newPost = {
        id: 8,
        content: postMessage,
        likesCount: 0,
    };
    State.profilePage.posts.push(newPost);
    rerenderDOM(State);
}


export default State;