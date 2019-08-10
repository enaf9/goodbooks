import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text.darkGrey};
  display: block;
  margin-bottom: 10px;
`;

export default NavLink;
