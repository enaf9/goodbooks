import styled from "styled-components";

const StyledBookCard = styled.img`
  border-radius: 10px;
  height: ${props => (props.big ? "185px" : "125px")};
  width: ${props => (props.big ? "137px" : "90px")};
  object-fit: cover;
  align-self: center;
`;

export default StyledBookCard;
