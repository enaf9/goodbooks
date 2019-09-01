import styled from "styled-components";
import TextArea from "../../../shared-styled-components/TextArea";

const StyledTextArea = styled(TextArea)`
  width: 315px;
  border: none;
  background: ${props => props.theme.colors.complementary.lightGrey};
`;

export default StyledTextArea;
