import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 My React App. All Rights Reserved.</p>
    </footer>
  );
};
const styles = {
  footer: {
    textAlign: "center",
    padding: "10px 0",
    backgroundColor: "#f1f1f1",
    position: "absolute",
    bottom: "0",
    width: "100%",
  },
};

export default Footer;
