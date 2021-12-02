const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newTextMessage
            };
            state.messageData.push(newMessage);
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newTextMessage = action.newMessage;
            return state;
        default:
            return state;
    }
};

export const addMessageAction = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextAction = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

export default messageReducer;