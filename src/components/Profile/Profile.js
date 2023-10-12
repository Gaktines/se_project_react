import React from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({ onSelectCard, handleActiveCreateModal, clothingItems, clothingItem, selectedCard, handleEditModal, handleLogout }) => {
  return (
    <section className="profile">
        <SideBar 
        handleEditModal={handleEditModal}
        handleLogout={handleLogout}
        />
        <ClothesSection
          onSelectCard={onSelectCard}
          handleActiveCreateModal={handleActiveCreateModal}
          clothingItems={clothingItems}
          clothingItem={clothingItem}
          selectedCard={selectedCard}
        />
    </section>
  );
};

export default Profile;
