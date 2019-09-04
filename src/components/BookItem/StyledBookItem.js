import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBookItem = styled(Link)`
  min-height: 230px;
  width: 150px;
  text-align: center;
  display: inline-block;
  text-decoration: none;
  color: ${props => props.theme.colors.text.darkGrey};
`;

export default StyledBookItem;
