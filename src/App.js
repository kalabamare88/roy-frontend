/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import "./App.css";

import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { SET_COLOR, SET_MODE } from "./constants/appConstants";
import { useDispatch, useSelector } from "react-redux";

import Footer from "./components/layout/footer/Footer";
import Sidebar from "./components/layout/Sidebar";
import StepUps from "./pages/StepUps";
import Header from "./components/layout/header/Header";
import Lists from "./components/lists/Lists";

function App() {
  const dispatch = useDispatch();

  window.addEventListener("contextmenu", (e) => e.preventDefault());
  const { currentMode, activeMenu } = useSelector(
    (state) => state.appControllers
  );

  return (
    <div className={currentMode === "Dark" ? "bg-dark" : ""}>
      <Router>
        <div
          className={`flex relative ${
            currentMode === "Dark" ? "bg-main-dark-bg" : "bg-white"
          }  `}
        >
          {activeMenu ? (
            <div
              className={`w-72 z-50 fixed sidebar ${
                currentMode === "Dark" ? "bg-secondary-dark-bg" : "bg-white"
              }  `}
            >
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? ` min-h-screen md:ml-72 w-full ${
                    currentMode === "Dark" ? "bg-main-dark-bg" : "bg-main-bg"
                  }  `
                : `  w-full min-h-screen flex-2  ${
                    currentMode === "Dark" ? "bg-main-dark-bg" : "bg-main-bg"
                  }  `
            }
          >
            <div
              className={`fixed md:static z-40 navbar w-full ${
                currentMode === "Dark" ? "bg-main-dark-bg" : "bg-main-bg"
              }  `}
            >
              <Header />
            </div>
            <div className="app-wrapper">
              <Routes>
                <Route path="/" element={<StepUps />} />
                <Route path="/lists" element={<Lists />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
