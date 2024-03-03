import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductServices } from "src/services/ProductServices";

export function ProductPage() {
  const navigate = useNavigate();
  const productServices = new ProductServices();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await productServices.getProducts();

    setProducts(res);
  };

  return (
    <div>
      <h1>Product B1</h1>
      <hr />

      <ul>
        <li>
          <button onClick={() => navigate("/")}>Home</button>
        </li>
        <li>
          <button onClick={() => navigate("/user")}>User</button>
        </li>
      </ul>

      <hr />

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
        </div>
      ))}
    </div>
  );
}
