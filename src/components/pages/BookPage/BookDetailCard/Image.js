import styled from "styled-components";

const Image = styled.img`
  border-radius: 10px;
  width: 130px;
  height: 180px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    width: 270px;
    height: 380px;
  }
`;

export default Image;
