import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.text.darkGrey};
`;

export default StyledLink;
