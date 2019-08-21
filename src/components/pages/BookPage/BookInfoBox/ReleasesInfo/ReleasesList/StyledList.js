import styled from "styled-components";

const StyledList = styled.div`
  margin: 10px 0;
  max-height: ${props => (props.isOpen ? "10000px" : "0px")};
  overflow: hidden;
  transition: max-height 0.7s ease-in-out;
`;

export default StyledList;
