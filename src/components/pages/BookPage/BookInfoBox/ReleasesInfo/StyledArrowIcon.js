import styled, { css } from "styled-components";
import ArrowIcon from "../../../../../shared-styled-components/ArrowIcon";

const isOpen = css`
  transform: scaleY(-1);
`;

const StyledArrowIcon = styled(ArrowIcon)`
  color: ${props => props.theme.colors.text.darkGrey};
  margin-left: 5px;
  transition: transform 0.5s;

  ${props => (props.isOpen ? isOpen : "")}
`;

export default StyledArrowIcon;
