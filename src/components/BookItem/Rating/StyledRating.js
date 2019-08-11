import styled from "styled-components";

const StyledRating = styled.div`
  background: ${props => props.theme.colors.background.white};
  position: absolute;
  right: 0;
  border-radius: 0px 10px;
  padding: 4px 7px 4px 3px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 3px;
`;

export default StyledRating;
