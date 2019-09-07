import styled from "styled-components";
import { Plus } from "styled-icons/feather/Plus";

const PlusIcon = styled(Plus)`
  stroke-width: 2px;
  color: ${props => props.theme.colors.text.darkGrey};
  height: ${props => (props.size ? props.size + "px" : "24px")};
  width: ${props => (props.size ? props.size + "px" : "24px")};
  pointer-events: ${props =>
    props.pointerEvents ? props.pointerEvents : "auto"};
`;

export default PlusIcon;
