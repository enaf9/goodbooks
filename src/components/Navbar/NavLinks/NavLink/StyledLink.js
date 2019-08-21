import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props =>
    props.active
      ? props.theme.colors.main.red
      : props.theme.colors.text.darkGrey};

  &:hover {
    color: ${props => props.theme.colors.main.red};
  }
`;

export default StyledLink;
