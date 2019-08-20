import styled, { css } from "styled-components";
import { BookOpen } from "styled-icons/feather/BookOpen";

const checked = css`
  color: ${props => props.theme.colors.complementary.blue};
`;

const BookIcon = styled(BookOpen)`
  stroke-width: 2px;
  width: 20px;
  height: 20px;
  margin-right: 15px;
  color: ${props => props.theme.colors.text.darkGrey};
  pointer-events: none;
  ${props => (props.checked ? checked : "")};
`;

export default BookIcon;
