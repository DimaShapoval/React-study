import messageReducer from "./message-reducer"
import profileReducer from "./profile-reduser"

const ADD_POST = 'ADD-POST'
const UPDATE_TEXT = 'UPDATE-NEW-TEXT'
const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE"
const ADD_MESSAGE = "ADD-MESSAGE"

let store = {
    _rerenderDOM() {
        console.log("State is changed");
    },
   
    
    _State: {
        profilePage: {

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
            ],
            messageInputValue: "",
        },
     
        navBar: {
            friend: [
                { id: 1, name: "Igor" },
                { id: 2, name: "Vika" },
                { id: 3, name: "Sveta" },
            ]
        }
    },
    getState() {
        return this._State;
    },
    subscribe(observer) {
        this._rerenderDOM = observer; // observer this is our observer translate like наблюдадеть or it is pattern

    },
    // addPost() {
    // },
    // changeValue(newValue) { //function that change value in texarea when it change like one letter

    // },
    dispatch(action) { //important to have { type: (type of info) exapmle: "TEXT"}
        // this._State.profilePage = profileReducer(this._State.profilePage, action)
        // this._State.messagePage = messageReducer(this._State.messagePage, action)
        // this._rerenderDOM(this.getState())
    }



}





export default store;