import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  display: grid;
  grid-template-columns: 30px auto;
  column-gap: 7px;
  margin-top: 9px;
  margin-bottom: 6px;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.colors.text.darkGrey};
`;

export default Wrapper;
