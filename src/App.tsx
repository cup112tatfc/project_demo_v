import { Switch } from "antd";
import { useState } from "react";
import "./App.scss";
import Moon from "../src/images/icons/moon2.png";
import Sun from "../src/images/icons/sun.png";
import Admin from "pages/Admin/Admin";
import { BrowserRouter } from "react-router-dom";
import Layout from "layout";
import showPages from "showpages/showpage";
import routers from "routers/routers";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>{showPages(routers)}</Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
