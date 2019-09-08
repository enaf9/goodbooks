import styled from "styled-components";
import { Star } from "styled-icons/feather/Star";

const StarIcon = styled(Star)`
  color: transparent;
  fill: ${props =>
    props.fill >= 1
      ? props.theme.colors.complementary.yellow
      : props.theme.colors.complementary.grey};
  pointer-events: none;
`;

export default StarIcon;
