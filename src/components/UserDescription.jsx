import React from "react";
import { useParams } from "react-router-dom";
import { client } from "./UserInfo";
import "../styles/styles.css";

function UserDescription() {
  const { id } = useParams();
  const user = client.find((cl) => cl.id == id);

  if (!user) {
    return <div className='red'>User not found</div>;
  }
  return (
    <div>
      <img src={user.img} alt={user.name} />
      <h1>{user.name}</h1>
      <p>{user.description}</p>
    </div>
  );
}

export default UserDescription;
