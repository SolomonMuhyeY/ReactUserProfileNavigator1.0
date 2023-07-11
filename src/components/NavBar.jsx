import React from "react";
import "./styles.css";
export default function NavBar() {
  return (
    <nav class='nav-bar'>
      <ul>
        <li className='left'>JSOM</li>
        <li>Authors</li>
        <li class='gray'>Most Liked Post</li>
        <li class='gray'>Most Commented Post</li>
      </ul>
    </nav>
  );
}
