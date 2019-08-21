import styled from "styled-components";

const UnderLine = styled.hr`
  margin-top: 7px;
  width: ${props => (props.active ? "100%" : "0px")};
  border: 1px solid
    ${props =>
      props.active ? props.theme.colors.main.lightOrange : "transparent"};
  transition: width 0.5s ease-out;
`;

export default UnderLine;
