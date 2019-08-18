import React from "react";
import CreatableSelect from "react-select/creatable";

//styled components imports
import StyledArrowIcon from "./StyledArrowIcon";

const SelectInput = props => {
  return (
    <>
      <CreatableSelect
        options={props.options}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        theme={theme => ({
          ...theme,
          borderRadius: 10,
          colors: {
            ...theme.colors,
            neutral0: "#F4F5F5",
            neutral20: "transparent",
            neutral30: "transparent"
          }
        })}
        components={{
          DropdownIndicator: StyledArrowIcon,
          ClearIndicator: null,
          IndicatorSeparator: null
        }}
      />
    </>
  );
};

export default SelectInput;
