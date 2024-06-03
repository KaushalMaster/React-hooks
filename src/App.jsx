import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import { MyContextProvider, useContextApi } from "./Context";
import Home from "./Home";
import About from "./About";
import User from "./Users";

const App = () => {
  const navigate = useNavigate();
  const inputRef = useRef();

  const handleButtonClick = () => {
    navigate("/about");
  };

  return (
    <MyContextProvider>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user/123">User 123</Link>
            </li>
          </ul>
        </nav>
        <button onClick={handleButtonClick}>Go to About</button>
        <input ref={inputRef} type="text" placeholder="Focus me on load" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </MyContextProvider>
  );
};

export default App;
