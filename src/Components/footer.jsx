import React from "react";

const Creator = "Srikar Sundram";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <h3> Copyright ⓒ {currentYear} </h3>
        <p> Created by {Creator} </p>
      </footer>
    </div>
  );
}

export default Footer;
