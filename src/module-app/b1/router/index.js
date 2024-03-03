import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { UserPage } from "src/module-app/b1/pages/user";
import { ProductPage } from "src/module-app/b1/pages/product";
import { HomePage } from "src/module-app/b1/pages/home";

export default function B1Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}
