import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 30px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    margin: 30px auto 0px;
  }
`;

export default Wrapper;
