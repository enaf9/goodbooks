import styled from "styled-components";
import { Star } from "styled-icons/feather/Star";

const StarIcon = styled(Star)`
  color: ${props => props.theme.colors.complementary.yellow};
  fill: ${props => props.theme.colors.complementary.yellow};
`;

export default StarIcon;
