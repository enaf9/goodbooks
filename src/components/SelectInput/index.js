import React from "react";

//styled components imports
import Wrapper from "./Wrapper";
import ArrowIcon from "./ArrowIcon";
import StyledSelect from "./StyledSelect";

const SelectInput = props => {
  return (
    <Wrapper width={props.width}>
      <ArrowIcon size="24" />
      <StyledSelect>
        <option value="0">Nejnovějších</option>
        <option value="1">Nejstarších</option>
        <option value="2">Názvu</option>
        <option value="3">Nejlepší hodnocení</option>
        <option value="4">Nejhorší hodnocení</option>
        <option value="5">Počtu zobrazení</option>
      </StyledSelect>
    </Wrapper>
  );
};

export default SelectInput;
