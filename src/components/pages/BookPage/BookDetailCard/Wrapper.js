import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 764px;
  margin: 0px auto 20px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    margin-bottom: 30px;
  }
`;

export default Wrapper;
