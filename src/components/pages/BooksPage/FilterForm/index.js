import React from "react";

//styled components import
import StyledForm from "./StyledForm";
import Label from "./Label";
import Years from "./Years";
import StyledButton from "./StyledButton";
import Buttons from "./Buttons";
import Wrapper from "./Wrapper";
import FilterTitle from "./FilterTitle";
import Content from "./Content";

//components import
import SelectInput from "../../../SelectInput";
import SliderInputs from "./SliderInputs/index";

const FilterForm = props => {
  const handleClick = e => {
    e.preventDefault();
  };
  return (
    <StyledForm isOpen={props.isOpen}>
      <FilterTitle>Filtrování</FilterTitle>
      <Content isOpen={props.isOpen}>
        <Wrapper>
          <Label>Žánr</Label>
          <SelectInput placeholder="Vyběr žánr" />
          <Years>
            <div>
              <Label>Rok od</Label>
              <SelectInput placeholder="Rok" />
            </div>
            <div>
              <Label>Rok do</Label>
              <SelectInput placeholder="Rok" />
            </div>
          </Years>
        </Wrapper>
        <SliderInputs />
        <Buttons>
          <StyledButton onClick={handleClick} color="grey">
            Resetovat
          </StyledButton>
          <StyledButton onClick={handleClick}>Potvrdit</StyledButton>
        </Buttons>
      </Content>
    </StyledForm>
  );
};

export default FilterForm;
