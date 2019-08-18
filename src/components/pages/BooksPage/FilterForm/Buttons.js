import styled from "styled-components";

const Buttons = styled.div`
  text-align: right;
  @media (${props => props.theme.mediaQueries.tablet}) {
    grid-column: 2/3;
  }
`;

export default Buttons;
