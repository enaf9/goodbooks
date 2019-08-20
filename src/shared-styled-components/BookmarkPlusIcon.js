import styled, { css } from "styled-components";
import { BookmarkPlus } from "styled-icons/boxicons-regular/BookmarkPlus";

const checked = css`
  color: ${props => props.theme.colors.complementary.blue};
`;

const BookmarkPlusIcon = styled(BookmarkPlus)`
  width: 20px;
  height: 20px;
  color: ${props => props.theme.colors.text.darkGrey};
  pointer-events: none;
  ${props => (props.checked ? checked : "")};
`;

export default BookmarkPlusIcon;
