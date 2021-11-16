import MyProfile from "../profile/myProfile/MyProfile";
import React from "react";

const Profile = (props) => {
    return (
       <MyProfile state={props.state} />
    )
};

export default Profile;