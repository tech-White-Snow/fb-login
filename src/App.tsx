import React from "react";
import { Route ,BrowserRouter,Routes} from "react-router-dom";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";

function App() {
  return (
    <BrowserRouter>
      <h2 style={{ textAlign: "center" }}>Login with Social Media App</h2>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
