import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 15px 20px 20px;
  height: 235px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    height: 137px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 50px;
    margin: 0 auto;
    padding: 15px 30px 20px;
    max-width: 1240px;
  }
`;

export default StyledFooter;
