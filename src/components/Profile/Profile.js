import React from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({ handleItemCard, handleActiveCreateModal, parsedCards }) => {
  return (
    <section className="profile">
      <div>
        <SideBar />
      </div>
      <div>
        <ClothesSection
          onSelectCard={handleItemCard}
          handleActiveCreateModal={handleActiveCreateModal}
          parsedCards={parsedCards}
        />
      </div>
    </section>
  );
};

export default Profile;
