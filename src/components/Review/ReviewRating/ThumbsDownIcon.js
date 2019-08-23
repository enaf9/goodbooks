import styled from "styled-components";
import { ThumbsDown } from "styled-icons/feather/ThumbsDown";

const ThumbsDownIcon = styled(ThumbsDown)`
  stroke-width: 2px;
  width: 16px;
  height: 16px;
  color: ${props =>
    props.active
      ? props.theme.colors.complementary.red
      : props.theme.colors.text.grey};
  margin-left: 20px;
  cursor: pointer;
  pointer-events: none;
`;

export default ThumbsDownIcon;
