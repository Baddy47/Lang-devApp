import MyProfile from "../profile/myProfile/MyProfile";
import React from "react";

const Profile = ({state, addPost, updateNewPostText}) => {
    return (
       <MyProfile state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    )
};

export default Profile;