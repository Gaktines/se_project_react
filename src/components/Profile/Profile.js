import React from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({ onSelectCard, handleActiveCreateModal, parsedCards }) => {
  return (
    <section className="profile">
      <div>
        <SideBar />
      </div>
      <div>
        <ClothesSection
          onSelectCard={onSelectCard}
          handleActiveCreateModal={handleActiveCreateModal}
          parsedCards={parsedCards}
          
        />
      </div>
    </section>
  );
};

export default Profile;
