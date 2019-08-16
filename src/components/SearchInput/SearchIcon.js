import styled from "styled-components";
import { Search } from "styled-icons/feather/Search";

const SearchIcon = styled(Search)`
  position: absolute;
  left: 10px;
  top: 8px;
  stroke-width: 2;
  color: ${props => props.theme.colors.text.grey};
`;

export default SearchIcon;
