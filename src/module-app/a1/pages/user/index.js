import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserServices } from "src/services/UserServices";

export function UserPage() {
  const navigate = useNavigate();
  const userServices = new UserServices();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await userServices.getUsers();

    setUsers(res);
  };

  return (
    <div>
      <h1>Users A1</h1>
      <hr />

      <ul>
        <li>
          <button onClick={() => navigate("/")}>Home</button>
        </li>
        <li>
          <button onClick={() => navigate("/product")}>Product</button>
        </li>
      </ul>

      <hr />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
