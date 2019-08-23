import styled, { css } from "styled-components";

const big = css`
  grid-template-columns: 1fr;
  justify-items: center;
`;

const StyledUserCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 15px;
  align-items: center;
  max-width: 320px;
  margin: ${props => (props.center ? "0 auto" : "0")};

  @media (${props => props.theme.mediaQueries.tablet}) {
    ${props => (props.big ? big : "")}
  }
`;

export default StyledUserCard;
