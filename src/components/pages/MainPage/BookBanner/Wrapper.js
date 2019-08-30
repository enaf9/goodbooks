import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 890px;
  height: 375px;
  padding: 20px 0;
  background: ${props => props.theme.colors.background.lightOrange};
  border-radius: 30px;
  margin: 45px auto 60px;
`;

export default Wrapper;
