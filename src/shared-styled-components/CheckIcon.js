import styled, { css } from "styled-components";
import { Check } from "styled-icons/feather/Check";

const checked = css`
  color: ${props => props.theme.colors.complementary.blue};
`;

const CheckIcon = styled(Check)`
  stroke-width: 2px;
  width: 20px;
  height: 20px;
  color: ${props => props.theme.colors.text.darkGrey};
  pointer-events: none;
  ${props => (props.checked ? checked : "")};
`;

export default CheckIcon;
