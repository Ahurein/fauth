import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <a href="https://www.facebook.com/v4.0/dialog/oauth?client_id=560985389186186&redirect_uri=https%3A%2F%2F274c-41-66-209-15.eu.ngrok.io%2Fauth%2Fredirect%2Ffacebook&scope=email%2Cuser_friends&response_type=code&auth_type=rerequest&display=popup">
        Login with facebook
      </a>
    </div>
  );
}

export default App;
