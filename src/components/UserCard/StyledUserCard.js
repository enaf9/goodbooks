import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const big = css`
  grid-template-columns: 1fr;
  justify-items: center;
`;

const StyledUserCard = styled(Link)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 15px;
  align-items: center;
  max-width: 320px;
  margin: ${props => (props.center ? "0 auto" : "0")};
  text-decoration: none;
  color: ${props => props.theme.colors.text.darkGrey};

  @media (${props => props.theme.mediaQueries.tablet}) {
    ${props => (props.big ? big : "")}
  }
`;

export default StyledUserCard;
