import React from "react";
import "../styles/styles.css";
export default function User({ client }) {
  return (
    <div className='users'>
      <img src={client.img} />
      <h1>{client.name}</h1>
      <button>{client.btnMsg}</button>
    </div>
  );
}
