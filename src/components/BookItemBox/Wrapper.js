import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  display: grid;
  grid-template-columns: 30px auto;
  column-gap: 5px;
  margin-bottom: ${props => (props.bottom ? props.bottom + "px" : "6px")};
  text-decoration: none;
  color: ${props => props.theme.colors.text.darkGrey};
`;

export default Wrapper;
