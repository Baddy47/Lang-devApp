import MyProfile from "../profile/myProfile/MyProfile";
import React from "react";

const Profile = ({state, dispatch}) => {
    return (
       <MyProfile state={state} dispatch={dispatch} />
    )
};

export default Profile;