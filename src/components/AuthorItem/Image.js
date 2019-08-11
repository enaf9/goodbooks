import styled from "styled-components";

const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit: cover;

  @media (${props => props.theme.mediaQueries.tablet}) {
    height: 120px;
    width: 120px;
  }
`;

export default Image;
