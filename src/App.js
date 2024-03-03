import { REACT_APP_KEY } from "./config/Url";
import A1Router from "./module-app/a1/router";
import B1Router from "./module-app/b1/router";

function App() {
  return (
    <div>
      {REACT_APP_KEY == "A1" ? (
        <A1Router />
      ) : REACT_APP_KEY == "B1" ? (
        <B1Router />
      ) : (
        <h1>Invalid Key</h1>
      )}
    </div>
  );
}

export default App;
