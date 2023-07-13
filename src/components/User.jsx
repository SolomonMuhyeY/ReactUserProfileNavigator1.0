import React from "react";
import "../styles/styles.css";
export default function User({ client }) {
  return (
    <div className='users'>
      <img src={client.img} />
      <p>{client.name}</p>
      <button className='btn'>{client.btnMsg}</button>
    </div>
  );
}
