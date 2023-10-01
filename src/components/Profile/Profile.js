import React from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({ onSelectCard, handleActiveCreateModal, clothingItems, currentUser }) => {
  return (
    <section className="profile">
        <SideBar {...currentUser}/>
        <ClothesSection
          onSelectCard={onSelectCard}
          handleActiveCreateModal={handleActiveCreateModal}
          clothingItems={clothingItems}
        />
    </section>
  );
};

export default Profile;
