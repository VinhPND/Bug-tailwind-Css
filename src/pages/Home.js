import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", minHeight: "100vh", position: "relative" }}>
      <h1>Welcome to Home Page</h1>
      <Button onClick={() => navigate("/product")} text="Go to Product Page" />
      <Footer />
    </div>
  );
};
// đây chú Dinh thấy ở dòng 12, mình gọi component <Button thấy hông, 
// giờ đơn giản lắm, 
//có phải đặt tên cho nso rùi gọi hong
// đặt tên như là "go tô Home page " hở chú D
//kiểu Button1
// à ko, ko cần đâu nè
// nhìn chú V làm mẫu 1 lần nghen
// đầu tiên copy dòng 12 =))
// quay về Product page

export default Home;
