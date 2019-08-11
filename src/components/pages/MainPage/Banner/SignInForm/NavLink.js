import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text.darkGrey};
  text-decoration: none;
`;

export default NavLink;
