import styled, { css } from "styled-components";
import { Heart } from "styled-icons/feather/Heart";

const checked = css`
  color: ${props => props.theme.colors.complementary.red};
  fill: ${props => props.theme.colors.complementary.red};
`;

const HeartIcon = styled(Heart)`
  stroke-width: 2px;
  width: 20px;
  height: 20px;
  color: ${props => props.theme.colors.text.darkGrey};
  pointer-events: none;
  ${props => (props.checked ? checked : "")};
`;

export default HeartIcon;
