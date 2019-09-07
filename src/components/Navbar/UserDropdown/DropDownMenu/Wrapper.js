import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 25px;
  right: 5px;
  padding: 15px 10px;
  background: ${props => props.theme.colors.background.lightGrey};
`;

export default Wrapper;
