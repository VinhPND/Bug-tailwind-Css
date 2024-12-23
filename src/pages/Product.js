import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0); // State đếm số lượng
  const [products, setProducts] = useState([]); // State quản lý danh sách sản phẩm
  const [isFormVisible, setFormVisible] = useState(false); // State để hiển thị/ẩn form
  const [apiProducts, setApiProducts] = useState([]); // State lưu danh sách sản phẩm từ API
  const [selectedProduct, setSelectedProduct] = useState(null); // State lưu sản phẩm được chọn

  const handleAddProduct = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products"); // Call API
      setApiProducts(response.data); // Lưu danh sách sản phẩm từ API
      setFormVisible(true); // Hiển thị form
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product); // Cập nhật sản phẩm được chọn
  };

  const handleConfirmProduct = () => {
    if (selectedProduct) {
      setProducts([...products, selectedProduct]); // Thêm sản phẩm vào danh sách
      setCount(count + 1); // Tăng count
      setSelectedProduct(null); // Reset sản phẩm được chọn
      setFormVisible(false); // Ẩn form
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen p-4">
      <h1 className="text-2xl mb-4">Product Page</h1>
      <h2 className="text-xl text-blue-500 mb-4">Count: {count}</h2>

      <div className="flex justify-between gap-4 mb-4">
        <Button onClick={() => navigate("/")} text="Go to Home Page" />
        <Button onClick={handleAddProduct} text="Thêm sản phẩm" />
      </div>

      {isFormVisible && (
        <div className="flex flex-col items-center gap-4 p-4 border border-gray-300 rounded bg-gray-100 w-full max-w-md">
          <h3 className="text-lg">Chọn sản phẩm từ danh sách</h3>
          
          <div className="overflow-y-auto max-h-60 w-full">
            <ul className="list-none p-0">
              {apiProducts.map((product) => (
                <li
                  key={product.id}
                  onClick={() => handleSelectProduct(product)}
                  className={`p-4 mb-2 cursor-pointer rounded hover:bg-gray-200 transition duration-200 ${
                    selectedProduct?.id === product.id
                      ? "bg-gray-300 font-bold"
                      : "bg-white"
                  }`}
                >
                  <h4 className="font-semibold">{product.title}</h4>
                  <p className="text-gray-500">Giá: {product.price} $</p>
                </li>
              ))}
            </ul>
          </div>

          <Button onClick={handleConfirmProduct} text="Xác nhận" />
        </div>
      )}

      <ul className="list-none p-0 mt-6">
        {products.map((product, index) => (
          <li key={index} className="p-4 mb-2 border rounded w-full max-w-md">
            <h3 className="font-bold">{product.title}</h3>
            <p className="text-gray-500">Giá: {product.price} $</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
