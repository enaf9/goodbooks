import styled from "styled-components";
import { ChevronDown } from "styled-icons/feather/ChevronDown";

const ArrowIcon = styled(ChevronDown)`
  stroke-width: 2px;
  color: ${props =>
    props.color ? props.theme.colors.text[props.color] : "#8e9ca4"};
  height: ${props => (props.size ? props.size + "px" : "24px")};
  width: ${props => (props.size ? props.size + "px" : "24px")};
`;

export default ArrowIcon;
