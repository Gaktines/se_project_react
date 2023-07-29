import React from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({ onSelectCard, handleActiveCreateModal, clothingItems }) => {
  return (
    <section className="profile">
      <div>
        <SideBar />
      </div>
      <div>
        <ClothesSection
          onSelectCard={onSelectCard}
          handleActiveCreateModal={handleActiveCreateModal}
          clothingItems={clothingItems}
        />
      </div>
    </section>
  );
};

export default Profile;
