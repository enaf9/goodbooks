import styled from "styled-components";
import { Sliders } from "styled-icons/feather/Sliders";

const FilterIcon = styled(Sliders)`
  transform: rotate(90deg);
  stroke-width: 2px;
  color: ${props => props.theme.colors.text.darkGrey};
`;

export default FilterIcon;
