import { AiOutlineMenu } from "react-icons/ai";
import { MENU_CLICK, SET_SCREEN_SIZE } from "../../../constants/appConstants";
import React, { Fragment, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import NavButton from "../NavButton";
import SecondaryButton from "../../global/SecondaryButton";
import { Menu, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { home, lists, profile, support } from "../../../constants/links";
import { combineClassNames } from "../../../utils/functions";

const Header = () => {
  const menuItems = [
    {
      label: "Profile-Details",
      icon: "/images/rightmenuaccountsettings.svg",
      destination: lists,
    },
    { label: "Support", icon: "/images/support.svg", destination: support },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentColor, screenSize, activeMenu } = useSelector(
    (state) => state.appControllers
  );

  const handleWindowResize = useCallback(() => {
    dispatch({
      type: SET_SCREEN_SIZE,
      payload: window.innerWidth,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  useEffect(() => {
    if (screenSize <= 900) {
      dispatch({
        type: MENU_CLICK,
        payload: false,
      });
    } else {
      console.log("negash");
      dispatch({
        type: MENU_CLICK,
        payload: true,
      });
    }
  }, [screenSize]);
  const routeChange = (profile) => {
    navigate(profile);
  };
  const handleActiveMenu = () => {
    dispatch({
      type: MENU_CLICK,
      payload: !activeMenu,
    });
  };
  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex mt-4">
        <div className="flex items-center gap-x-7">
          
            <button className="hidden lg:block" onClick={()=>routeChange("/profile")}>Profile Details</button>
            <button className="hidden lg:block" onClick={()=>routeChange("/support")}>Support</button>
        
          <div className="lg:block">
            <SecondaryButton
              onClick={() => {
                navigate(home);
              }}
            >
              Create profile
            </SecondaryButton>
          </div>

          <Menu as="div" className="relative inline-block text-left lg:hidden">
            <div className="flex items-center">
              <Menu.Button>
                <img
                  src="/images/rightmenicon.svg"
                  className="w-9 h-9"
                  alt="logo"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-lg focus:outline-none">
                <div className="py-2">
                  {menuItems.map((item, index) => (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <button
                          onClick={() =>
                            item.action
                              ? item.action()
                              : navigate(item.destination)
                          }
                          className={combineClassNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block w-full px-4 py-2 text-left text-sm font-bold duration-150"
                          )}
                        >
                          <div className="flex items-center gap-x-4">
                            <div className="w-7 flex justify-center">
                              <img src={item.icon} alt="logo" />
                            </div>
                            {item.label}
                          </div>
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
