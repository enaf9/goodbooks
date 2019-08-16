import React from "react";

//styled components imports
import Wrapper from "./Wrapper";
import ArrowIcon from "./ArrowIcon";
import StyledSelect from "./StyledSelect";
import CreatableSelect from "react-select/creatable";

const SelectInput = props => {
  return (
    // <Wrapper width={props.width}>
    //   <ArrowIcon size="24" />
    //   <StyledSelect>
    //     <option value="0">Nejnovějších</option>
    //     <option value="1">Nejstarších</option>
    //     <option value="2">Názvu</option>
    //     <option value="3">Nejlepší hodnocení</option>
    //     <option value="4">Nejhorší hodnocení</option>
    //     <option value="5">Počtu zobrazení</option>
    //   </StyledSelect>
    // </Wrapper>
    <>
      <CreatableSelect
        theme={theme => ({
          ...theme,
          borderRadius: 10,
          colors: {
            ...theme.colors,
            neutral0: "#F4F5F5"
            // primary: "white",
            // neutral20: "white",
            // neutral30: "white",
            // primary50: "#F1F4F9",
            // neutral10: "#F1F4F9",
            // dangerLight: "#F1F4F9"
          }
        })}
      />
    </>
  );
};

export default SelectInput;
