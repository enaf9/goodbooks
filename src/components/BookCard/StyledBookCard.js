import styled from "styled-components";

const StyledBookCard = styled.div`
  width: 255px;
  height: ${props => (props.big ? "185px" : "125px")};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 15px;
`;

export default StyledBookCard;
