import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home B1</h1>

      <hr />

      <ul>
        <li>
          <button onClick={() => navigate("/user")}>User</button>
        </li>
        <li>
          <button onClick={() => navigate("/product")}>Product</button>
        </li>
      </ul>

      <hr />
    </div>
  );
}
