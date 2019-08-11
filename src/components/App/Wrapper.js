import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 30px 40px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    padding: 0 70px 40px;
  }

  @media (${props => props.theme.mediaQueries.desktop}) {
    padding: 0 130px 40px;
  }
`;

export default Wrapper;
