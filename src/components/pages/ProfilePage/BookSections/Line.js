import styled from "styled-components";

const Line = styled.hr`
  border: 0.5px solid ${props => props.theme.colors.complementary.grey};
  margin: 25px 0;

  @media (${props => props.theme.mediaQueries.tablet}) {
    display: none;
  }
`;

export default Line;
