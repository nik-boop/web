import React from 'react';
import {Route, Routes} from "react-router-dom";
import App1 from "../App1";
import App2 from "../App2";
import App3 from "../App3";

const AppNavigator = () => {
  return (
      <Routes>
        <Route path={"/"} element={<App2/>}/>
        <Route path={"/meatballs"} element={<App1/>}/>
        <Route path={"/squid"} element={<App3/>}/>
      </Routes>
  );
};

export default AppNavigator;