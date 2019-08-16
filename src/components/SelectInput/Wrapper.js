import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.complementary.lightGrey};
  ${props => props.width && "width:" + props.width}
`;

export default Wrapper;
