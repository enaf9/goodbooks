import styled from "styled-components";
import { ThumbsUp } from "styled-icons/feather/ThumbsUp";

const ThumbsUpIcon = styled(ThumbsUp)`
  stroke-width: 2px;
  width: 16px;
  height: 16px;
  color: ${props =>
    props.active
      ? props.theme.colors.complementary.blue
      : props.theme.colors.text.grey};
  margin-left: 10px;
  cursor: pointer;
  pointer-events: none;
`;

export default ThumbsUpIcon;
