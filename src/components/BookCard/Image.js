import styled from "styled-components";

const StyledBookCard = styled.img`
  border-radius: 10px;
  height: 125px;
  width: 90px;
  object-fit: cover;
  align-self: center;
  @media (${props => props.theme.mediaQueries.tablet}) {
    height: ${props => (props.big ? "185px" : "125px")};
    width: ${props => (props.big ? "137px" : "90px")};
  }
`;

export default StyledBookCard;
