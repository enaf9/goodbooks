import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 10px;
  background-color: ${props => props.theme.colors.complementary.lightGrey};
  padding: 15px;
  position: relative;
  max-width: 355px;
`;

export default Wrapper;
