import React from "react";
import "./Profile.css";
import avatar from "../../images/avatar.svg";

const Profile = () => {
return(
    <section className="profile">
        <div className="profile__sideBar">
        <img src={avatar} alt="avatar" />
        <p className="profile__sideBar-name">George Aktines</p>
        </div>
        <div className="profile__clothesSection">
        </div>
    </section>
)
};

export default Profile;
