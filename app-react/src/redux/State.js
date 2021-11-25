import {rerenderEntireTree} from "../Render";

let state = {
    messagePage: {
        userData: [
            {id: 1, name: 'Simona'},
            {id: 2, name: 'Anna'},
            {id: 3, name: 'Mila'},
            {id: 4, name: 'Billy'}
        ],
        messageData: [
            {id: 1, message: 'Hi, what you name?'},
            {id: 2, message: 'My name is Anna'}
        ],
        newTextMessage: ''
    },
    profilePage: {
        postData: [
            {id: 1, name: 'Simona', message: 'This my car.', likeCounts: 55},
            {id: 2, name: 'Billy', message: 'I found a new job.', likeCounts: 24},
        ],
        newTextData: ''
    },
    sideBar: {}
};

export  const addPost = () => {
    let newPost = {
        id: 4,
        name: 'Mark',
        message: state.profilePage.newTextData,
        likeCounts: 0
    };
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
};

export  const addMessage = () => {
    let newMessage = {
        id: 2,
        message: state.messagePage.newTextMessage
    };
    state.messagePage.messageData.push(newMessage);
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newTextData = newText;
    rerenderEntireTree(state);
};

export const updateNewMessageText = (newMessage) => {
    state.messagePage.newTextMessage = newMessage;
    rerenderEntireTree(state);
};

export default state;