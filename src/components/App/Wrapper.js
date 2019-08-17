import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 30px 40px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    margin: 0 70px 40px;
  }

  @media (${props => props.theme.mediaQueries.desktop}) {
    margin: 0 130px 40px;
  }
`;

export default Wrapper;
