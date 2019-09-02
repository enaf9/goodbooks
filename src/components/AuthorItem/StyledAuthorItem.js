import styled from "styled-components";

import { Link } from "react-router-dom";

const StyledAuthorItem = styled(Link)`
  width: 125px;
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.colors.text.darkGrey};
  @media (${props => props.theme.mediaQueries.tablet}) {
    width: 150px;
  }
`;

export default StyledAuthorItem;
