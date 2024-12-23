import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to Home Page</h1>
      <Button onClick={() => navigate("/product")} text="Go to Product Page" />
      <Footer />
    </div>
  );
};

export default Home;
