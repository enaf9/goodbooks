import styled from "styled-components";

const UnderLine = styled.hr`
  margin-top: 7px;
  border: 1px solid
    ${props =>
      props.active ? props.theme.colors.main.lightOrange : "transparent"};
`;

export default UnderLine;
