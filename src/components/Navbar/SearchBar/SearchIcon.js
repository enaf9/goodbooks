import styled, { css } from "styled-components";
import { Search } from "styled-icons/feather/Search";

const active = css`
  right: calc(100% - 34px);
`;

const SearchIcon = styled(Search)`
  width: 24px;
  stroke-width: 2;
  cursor: pointer;
  position: absolute;
  transition: all 0.7s ease;
  top: 8px;
  right: 0px;
  ${props => (props.active ? active : "")}
`;

export default SearchIcon;
