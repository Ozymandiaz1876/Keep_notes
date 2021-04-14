import React from "react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made with ❤️ By Chandresh Sharma </p>
      <p>No Copyright ⓒ {year}</p>
    </footer>
  );
}
