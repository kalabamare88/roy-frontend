import { IoMdArrowDropdown } from "react-icons/io";
import React from "react";
import Select from "react-select";

const Dropdown = () => {
  return (
    <div style={{ marginLeft: "-10px" }}>
      <IoMdArrowDropdown size={"20px"} />
    </div>
  );
};

export const SelectStyleTwo = {
  control: (styles, { bgColor }) => ({
    ...styles,
    backgroundColor: bgColor,
    paddingRight: "2px",
    border: 0,
    borderColor: 'transaprent',
    boxShadow: "none",
    fontWeight: 400,
    fontSize: 14,
    height: "24px",
    cursor: "pointer",
    marginTop:"6px",
    marginBottom:"4px",
    minWidth: "100px",
    
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "#CED4DA !important",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "#CED4DA !important",
    // specify a fallback color here for those values not accounted for in the styleMap
  }),
  menu: (styles) => ({
    ...styles,
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
      fontWeight: 400,
      overflow: "visible",
      fontSize: "13px",
      lineHeight: "12px",
      marginBottom: "0.5rem",
      color: isDisabled ? "#ccc" : "#009cea !important",
      cursor: isDisabled ? "not-allowed" : "pointer",
      borderRadius: "6px",
      ":active": {
        ...styles[":active"],
        backgroundColor: "#EEF1FC",
      },
    };
  },
};
const SelectOption = ({
  options,
  placeholder,
  value,
  disabled,
  onChange,
  label,
  className,
}) => {
  return (
    <Select
      options={options}
      value={value}
      className={className}
      onChange={onChange}
      styles={SelectStyleTwo}
      placeholder={placeholder}
      isDisabled={disabled}
      label={label}
      components={{
        DropdownIndicator: Dropdown,
        IndicatorSeparator: () => null,
      }}
    />
  );
};

export default SelectOption;
