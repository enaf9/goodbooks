import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBookCard = styled(Link)`
  width: 255px;
  height: 125px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 15px;
  text-decoration: none;
  color: ${props => props.theme.colors.text.darkGrey};

  @media (${props => props.theme.mediaQueries.tablet}) {
    height: ${props => (props.big ? "185px" : "125px")};
    width: ${props => (props.big ? "325px" : "255px")};
  }
`;

export default StyledBookCard;
