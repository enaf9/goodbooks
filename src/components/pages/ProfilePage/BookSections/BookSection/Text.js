import styled from "styled-components";
import { Link } from "react-router-dom";

const SectionName = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text.darkGrey};
  justify-self: right;
`;

export default SectionName;
