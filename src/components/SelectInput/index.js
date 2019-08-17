import React from "react";
import CreatableSelect from "react-select/creatable";

//styled components imports
import ArrowIcon from "./ArrowIcon";

const SelectInput = props => {
  const optionValues = [
    { value: "newest", label: "Nejnovějších" },
    { value: "oldest", label: "Nejstarších" },
    { value: "name", label: "Názvu" },
    { value: "bestRating", label: "Nejlepší hodnocení" },
    { value: "worstRating", label: "Nejhorší hodnocení" },
    { value: "views", label: "Počtu zobrazení" }
  ];

  return (
    <>
      <CreatableSelect
        options={optionValues}
        defaultValue={optionValues[0]}
        theme={theme => ({
          ...theme,
          borderRadius: 10,
          colors: {
            ...theme.colors,
            neutral0: "#F4F5F5",
            neutral20: "transparent"
          }
        })}
        components={{
          DropdownIndicator: ArrowIcon,
          ClearIndicator: null,
          IndicatorSeparator: null
        }}
      />
    </>
  );
};

export default SelectInput;
