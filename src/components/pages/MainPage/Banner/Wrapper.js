import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 70px;
  align-items: center;

  @media (${props => props.theme.mediaQueries.desktop}) {
    width: 885px;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 45px 0;
    margin: 0 auto;
  }
`;

export default Wrapper;
