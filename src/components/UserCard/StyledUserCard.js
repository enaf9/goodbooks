import styled from "styled-components";

const StyledUserCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 15px;
  align-items: center;
  max-width: 320px;
  margin: ${props => (props.center ? "0 auto" : "0")};
`;

export default StyledUserCard;
