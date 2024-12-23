import React from "react";

const Button = ({ onClick, text }) => { // khai bao component
  return (
    <button onClick={onClick} style={styles.button}>
      {text}
    </button>
  );
};
// styles la 1 bien json, chua cac property CSS của button
const styles = {
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Button; // export component

