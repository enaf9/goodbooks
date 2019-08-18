import React from "react";

//styled components import
import Label from "../Label";

//components import
import SliderInput from "./SliderInput";

const SliderInputs = () => {
  return (
    <div>
      <Label>Hodnocení od</Label>
      <SliderInput defaultValue="0" />
      <Label>Hodnocení do</Label>
      <SliderInput defaultValue="5" />
    </div>
  );
};

export default SliderInputs;
