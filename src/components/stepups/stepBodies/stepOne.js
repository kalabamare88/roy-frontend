import "../index.css";

import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import SelectOption from "../../global/SelectOption";
import {
  components as SelectComponents,
  GroupTypeBase,
  OptionTypeBase,
  SingleValueProps,
  StylesConfig,
} from "react-select";

import { IoMdArrowDropdown } from "react-icons/io";

const Dropdown = () => {
  return (
    <div style={{ marginLeft: "-10px" }}>
      <IoMdArrowDropdown size={"20px"} />
    </div>
  );
};

const StepOne = () => {
  const intialValues = {
    tokenType: "",
  };
  const data = [
    { value: "Golf", label: "Golf" },
    { value: "Tennis", label: "Tennis" },
    { value: "Cricket", label: "Cricket" },
    { value: "Basketball", label: "Basketball" },
    { value: "Baseball", label: "Baseball" },
    { value: "American Football", label: "American Football" },
    { value: "Aquatics", label: "Aquatics" },
    { value: "Archery", label: "Archery" },
    { value: "Automobile Racing", label: "Automobile Racing" },
    { value: "Badminton", label: "Badminton" },
    { value: "Beach Volleyball", label: "Beach Volleyball" },
    { value: "Bobsleigh", label: "Bobsleigh" },
    { value: "Body Building", label: "Body Building" },
    { value: "Boxing", label: "Boxing" },

    { value: "Cross Country Running", label: "Cross Country Running" },
    { value: " Cross Country Skiing", label: " Cross Country Skiing" },
    { value: "Curling", label: "Curling" },
    { value: "Darts", label: "Darts" },
    { value: "Decathlon", label: "Decathlon" },
    { value: "Equestrianism", label: "Equestrianism" },
    { value: "eSports", label: "eSports" },
    { value: "Fencing", label: "Fencing" },
    { value: "Field Hockey", label: "Field Hockey" },
    { value: " Figure Skating", label: " Figure Skating" },
    { value: "Gymnastics", label: "Gymnastics" },
    { value: "Ice Hockey", label: "Ice Hockey" },
    { value: " Martial Arts", label: " Martial Arts" },
    { value: "Mixed Martial Arts", label: "Mixed Martial Arts" },
    { value: "Modern Pentathlon", label: "Modern Pentathlon" },
    { value: "Motorcycle Racing", label: "Motorcycle Racing" },
    { value: "Netball", label: "Netball" },
    { value: "Polo", label: "Polo" },
    { value: "Racquetball", label: "Racquetball" },
    { value: "Rowing", label: "Rowing" },
    { value: "Rugby", label: "Rugby" },
    { value: "Sailing", label: "Sailing" },
    { value: "Softball", label: "Softball" },
    { value: "Shooting", label: "Shooting" },
    { value: "Skateboarding", label: "Skateboarding" },
    { value: "Skeet Shooting", label: "Skeet Shooting" },
    { value: "Skeleton", label: "Skeleton" },
    { value: "Snow Boarding", label: "Snow Boarding" },
    { value: "Soccer (Football)", label: "Soccer (Football)" },
    { value: "Squash", label: "Squash" },
    { value: "Surfing", label: "Surfing" },
    { value: "Swimming", label: "Swimming" },
    { value: "Track and Field", label: "Track and Field" },
  ];
  const [dispalay, setDispaly] = useState();

  const handel = (e) => {
    setDispaly(Array.isArray(e) ? e.map((x) => x.label) : []);
  };
 
  
  const [error, setError] = useState(false);
  const [feildMark, setFieldMark] = useState("");
  const animatedComponents = makeAnimated();
  const [controllers, setControllers] = useState(intialValues);

  const handleField = (e) => {
    setFieldMark(e.target.value);
  };
  const token_Type = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
  ];

  const handleLaunchDropdown = (event) => {
    const type = event.value;
    type === "male"
      ? setControllers({
          ...controllers,
          tokenType: "male",
        })
      : type === "female"
      ? setControllers({
          ...controllers,
          tokenType: "female",
        })
      : type === "Baby Token"
      ? setControllers({
          ...controllers,
          tokenType: "Baby Token",
        })
      : setControllers({
          ...controllers,
          tokenType: "Buyback Baby Token",
        });
  };
  return (
    <div className="form-container">
      {" "}
      <div className="form-steps">
        <div
          className="feild-container"
          style={{
            marginBottom: "48px",
            flex: "1",
            minWidth: "300px",
          }}
        >
          <div className="form-labels">
            <p className="mb-4">Name</p>
            <input
              style={{ width: "100%", padding: "8px 20px" }}
              placeholder="name"
              type="text"
              name="search"
              className={` bg-transparent 	hover:valid-border focus:valid-border ${
                error ? "error-border" : "valid-border"
              }`}
              value={feildMark}
              onChange={handleField}
            />
            {error && (
              <span className={` align-start ${error ? "error-message" : ""}`}>
                {" "}
                fix the error
              </span>
            )}
          </div>
        </div>
        <div
          className="feild-container"
          style={{
            marginBottom: "48px",
            flex: "1",
            minWidth: "300px",
          }}
        >
          <div className="form-labels">
            <p className="mb-4">Sport</p>
            <Select
              placeholder="sport"
              options={data}
              isMulti
              className={`select-border tobe   ${error ? "error" : ""}`}
              onChange={handel}
              styles={userSelectStyles}
              components={{
                DropdownIndicator: Dropdown,
                IndicatorSeparator: () => null,
                SingleValue: UserSelectSingleValue,
                Option: UserSelectOption,
                MultiValueLabel: UserSelectMultiValueLabel,
              }}
            />
            {error && (
              <span className={` align-start ${error ? "error-message" : ""}`}>
                {" "}
                fix the error
              </span>
            )}
          </div>
        </div>
        <div
          className="feild-container"
          style={{
            marginBottom: "48px",
            flex: "1",
            minWidth: "300px",
          }}
        >
          <div className="form-labels relative">
            <p className="mb-4">Gender</p>
            <SelectOption
              className={`select-border tobe  ${error ? "error" : ""}`}
              bgColor="rgb(28, 28, 33)"
              placeholder="gender"
              value={token_Type.filter(
                (option) => option.value === controllers.tokenType
              )}
              options={token_Type}
              onChange={handleLaunchDropdown.bind(this)}
            />

            {error && (
              <span className={` align-start ${error ? "error-message" : ""}`}>
                {" "}
                fix the error
              </span>
            )}
          </div>
        </div>
        <div
          className="feild-container"
          style={{
            marginBottom: "48px",
            flex: "1",
            minWidth: "300px",
          }}
        >
          <div className="form-labels">
            <p className="mb-4">Date of Birth</p>
            <input
              style={{ width: "100%", padding: "8px 20px" }}
              placeholder="birth date"
              type="date"
              name="search"
              className={` bg-transparent 	hover:valid-border focus:valid-border ${
                error ? "error-border" : "valid-border"
              }`}
              value={feildMark}
              onChange={handleField}
            />
            {error && (
              <span className={` align-start ${error ? "error-message" : ""}`}>
                {" "}
                fix the error
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const UserSelectOption = (props) => (
  <SelectComponents.Option {...props}>
    <div className="flex items-center">
      <span className="ml-8">{props.data.label}</span>
    </div>
  </SelectComponents.Option>
);

export const UserSelectMultiValueLabel = (props) => (
  <div className="flex items-center">
    <span className="ml-8">{props.data.label}</span>
  </div>
);

export const UserSelectSingleValue = (props) => (
  <div className="flex items-center">
    <span className="ml-8">{props.data.label}</span>
  </div>
);

export const userSelectStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "bgColor",
    paddingRight: "2px",
    border: 0,
    borderColor: "transaprent",
    boxShadow: "none",
    fontWeight: 400,
    fontSize: 14,
    cursor: "pointer",
    marginTop: "2px",
    marginBottom: "2px",
    minWidth: "300px",
    width:"100%",
    flex:"1"
  }),
  menu: (styles) => ({
    ...styles,
    borderRadius: "6px",
    width: "100%",
    marginTop: "0.7rem",
    background: "#fff",
    boxShadow: "0px 2px 12px rgba(19, 23, 32, 0.08)",
    padding: "0.6rem 0.6rem",
  }),
  menuList: (styles) => ({
    ...styles,
    padding: "0px",
  }),
  group: (styles) => ({
    ...styles,
    padding: "0 0 0.5rem 0",
  }),
  groupHeading: (styles) => ({
    ...styles,
    fontWeight: 400,
    color: "#878A92",
    fontSize: "14px",
    padding: "0.6rem 0.8rem",
    textTransform: "none",
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? "#F6F7F9"
        : isSelected
        ? "#EEF1FC"
        : isFocused
        ? "#F6F7F9"
        : "inherit",
      padding: "0.6rem 0.6rem 0.6rem 0.4rem",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      marginBottom: "0.5rem",
      color: isDisabled ? "#ccc" : "#131720",
      cursor: isDisabled ? "not-allowed" : "default",
      borderRadius: "6px",
      ":active": {
        ...styles[":active"],
        backgroundColor: "#EEF1FC",
      },
    };
  },
  multiValue: (styles) => ({
    ...styles,
    margin: "0",
    backgroundColor: "inherit",
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    ":hover": {
      background: "#EEF1FC",
    },
  }),
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
};

export default StepOne;
