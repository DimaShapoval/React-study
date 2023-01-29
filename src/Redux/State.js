let State = {
    profilePage: {
        
        posts: [
            { content: "Hi lol", likesCount: 1 },
            { content: "I am freedom", likesCount: 25 },
            { content: "Dmytro I love you", likesCount: 34 },
            { content: "I am a Front-end developer", likesCount: 1.2 + "m" },
            { content: "I am a Front-end developer", likesCount: 1.2 + "m" },
            { content: "I am a Front-end developer", likesCount: 1.2 + "m" },
            { content: "I am a Front-end developer", likesCount: 1.2 + "m" },
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

export default State;