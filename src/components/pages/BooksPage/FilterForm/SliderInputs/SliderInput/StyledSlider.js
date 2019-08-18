import styled from "styled-components";

const StyledSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  margin: 0;
  &::-webkit-slider-runnable-track {
    width: 300px;
    height: 2px;
    background: ${props => props.theme.colors.main.lightRed};
    border: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${props => props.theme.colors.main.lightRed};
    cursor: pointer;
    margin-top: -10px;
  }
`;

export default StyledSlider;
