import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 15px auto 0px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    margin: 30px auto 0px;
  }
`;

export default Wrapper;
