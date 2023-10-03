import React from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({ onSelectCard, handleActiveCreateModal, clothingItems, clothingItem }) => {
  return (
    <section className="profile">
        <SideBar />
        <ClothesSection
          onSelectCard={onSelectCard}
          handleActiveCreateModal={handleActiveCreateModal}
          clothingItems={clothingItems}
          clothingItem={clothingItem}
        />
    </section>
  );
};

export default Profile;
