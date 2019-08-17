import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  height: 40px;
  text-align: right;

  @media (${props => props.theme.mediaQueries.tablet}) {
    width: 480px;
    justify-self: end;
  }
`;

export default Wrapper;
