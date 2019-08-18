import React, { useState, useEffect } from "react";

import StyledSlider from "./StyledSlider";
import Values from "./Values";
import CurrentValue from "./CurrentValue";
import Wrapper from "./Wrapper";

const SliderInput = props => {
  const [value, setValue] = useState(props.defaultValue);
  const [position, setPosition] = useState(0);

  const handleChange = e => {
    setPosition((Number(e.target.value) / 5) * (e.target.offsetWidth - 20));
    setValue(e.target.value);
  };

  useEffect(e => {
    if (value) {
      const sliderWidth = document.getElementsByName("slider")[0].offsetWidth;
      setPosition((Number(value) / 5) * (sliderWidth - 20));
    }
  }, []);
  return (
    <Wrapper>
      <Values>0</Values>
      <div>
        <StyledSlider
          name="slider"
          type="range"
          min="O.0"
          max="5.0"
          step="0.1"
          value={value}
          onChange={handleChange}
        />
        <CurrentValue left={position}>{value}</CurrentValue>
      </div>
      <Values>5</Values>
    </Wrapper>
  );
};

export default SliderInput;
