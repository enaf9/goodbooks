import styled from "styled-components";
import { X } from "styled-icons/feather/X";

const CrossIcon = styled(X)`
  stroke-width: 2px;
  color: ${props => props.theme.colors.text.darkGrey};
`;

export default CrossIcon;
