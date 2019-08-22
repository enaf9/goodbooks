import styled from "styled-components";

const Wrapper = styled.div`
  margin: -30px 0 10px;
  max-height: ${props => (props.isOpen ? "10000px" : "0px")};
  overflow: hidden;
  transition: max-height 0.7s ease-in-out;
`;

export default Wrapper;
