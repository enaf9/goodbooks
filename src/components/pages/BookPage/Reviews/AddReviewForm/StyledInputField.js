import styled from "styled-components";
import InputField from "../../../../../shared-styled-components/InputField";

const StyledInputField = styled(InputField)`
  width: 100%;
  background: ${props => props.theme.colors.background.white};
  border: 0.7px solid ${props => props.theme.colors.complementary.grey};
  margin-bottom: 15px;
`;

export default StyledInputField;
