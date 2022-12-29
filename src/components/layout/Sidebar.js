import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { MdOutlineCancel } from "react-icons/md";
import React from "react";
import { FcSportsMode } from "react-icons/fc";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../../data/dummy";
import { MENU_CLICK } from "../../constants/appConstants";

const Sidebar = () => {
  const { currentMode, currentStep, activeMenu } = useSelector(
    (state) => state.appControllers
  );
  const dispatch = useDispatch();

  const handlemenu = (index) => {
    dispatch({
      type: "setstep",
      payload: index,
    });
  };
  const handlecancel=()=>{
    dispatch({
      type: MENU_CLICK,
      payload: false,
    });
  }
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };

  return (
    <div className="ml-3 h-screen   md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <button
              onClick={routeChange}
              className={`items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight ${
                currentMode === "Dark" ? "text-white " : "text-slate-900"
              }  `}
            >
              <FcSportsMode /> <span>Athlete</span>
            </button>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={handlecancel}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                <div style={{ marginLeft: "40px" }}>
                  {" "}
                  {item.links.map((link, index) => (
                    <div>
                      {" "}
                      <button
                        onClick={() => handlemenu(index)}
                        className={`mt-2 p-2 ${
                          currentStep === index
                            ? "text-green-700"
                            : "text-green-100"
                        }`}
                      >
                        {link.name}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
