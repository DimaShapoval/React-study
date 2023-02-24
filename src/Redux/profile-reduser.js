const ADD_POST = 'ADD-POST'
const UPDATE_TEXT = 'UPDATE-NEW-TEXT'

let initialState = {

    posts: [
        { content: "Hi lol", likesCount: 1, id: 1 },
        { content: "I am freedom", likesCount: 25, id: 2 },
        { content: "Dmytro I love you", likesCount: 34, id: 3 },
        { content: "I am a Front-end developer", likesCount: 1.2 + "m", id: 4 },
        { content: "I am a Front-end developer", likesCount: 1.2 + "m", id: 5 },
        { content: "I am a Front-end developer", likesCount: 1.2 + "m", id: 6 },
        { content: "I am a Front-end developer", likesCount: 1.2 + "m", id: 7 },
    ],
    newPostText: "it-kamasutra"

}

const profileReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case ADD_POST:
            //function that add post and rerender DOM 

            let newPost = { // object that we push in our this.State
                id: 8,
                content: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = "" // after click button our textarea has in value none
            break;
        case UPDATE_TEXT:
            state.newPostText = action.newValue;
            break;
        default:
            return state;
    }

    return state;
}
export let addPostActionCreator = () => {
    return {
        type: ADD_POST,

    }
}
export let updateNewTextActionCreator = (elem) =>{
    return{
        type: UPDATE_TEXT,
        newValue: elem.value,  
    }
}
export default profileReducer;