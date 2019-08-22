import styled from "styled-components";

const Image = styled.img`
  height: ${props => (props.big ? "120px" : "100px")};
  width: ${props => (props.big ? "120px" : "100px")};
  border-radius: 50%;
  object-fit: cover;
`;

export default Image;
