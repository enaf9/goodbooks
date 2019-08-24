import styled from "styled-components";

const StyledForm = styled.form`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  height: ${props => (props.isOpen ? "250px" : "0px")};
  overflow: hidden;
  transition: height 0.7s ease-in-out;
`;

export default StyledForm;
