import React from "react";
import { useParams } from "react-router-dom";
import { client } from "./UserInfo";
import "../styles/styles.css";

function UserDescription() {
  const { id } = useParams();
  const user = client.find((cl) => cl.id == id);

  if (!user) {
    return <div className='user-not-found'>User not found</div>;
  }
  return (
    <div className='description-container'>
      <img className='user-image' src={user.img} alt={user.name} />
      <h2 className='user-name'>{user.name}</h2>
      <p className='desciption-text'>{user.description}</p>
    </div>
  );
}

export default UserDescription;
