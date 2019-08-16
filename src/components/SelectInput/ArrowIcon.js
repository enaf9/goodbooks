import styled from "styled-components";
import { ChevronDown } from "styled-icons/feather/ChevronDown";

const ArrowIcon = styled(ChevronDown)`
  position: absolute;
  stroke-width: 2px;
  color: ${props => props.theme.colors.text.grey};
  top: 8px;
  right: 16px;
`;

export default ArrowIcon;
