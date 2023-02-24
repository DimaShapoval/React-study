const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE"
const ADD_MESSAGE = "ADD-MESSAGE"
let initialState = {
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
}

const messageReducer = (state = initialState, action) => {
 
    
    switch(action.type){
        case UPDATE_TEXT_MESSAGE:
            state.messageInputValue = action.newInputValue;
            break;
        case ADD_MESSAGE:
            let newDialog = {
                id: 5,
                // name: action.newName
            }
            let messageBody = state.messageInputValue
            let newMessage = {
                id: 5,
                message: messageBody,
            }
            state.message.push(newMessage);
            state.messageInputValue = "";
            break;
        default:
            return state;
    }
    return state;
}
export let onMessageInputChangeActionCreator = (elem) =>{
    return{
        type: UPDATE_TEXT_MESSAGE,
        newInputValue: elem.value
    }
}
export let addMessageActionCreator = () =>{
    return{
        type: ADD_MESSAGE,
        

    }
}
export default messageReducer;