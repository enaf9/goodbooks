import styled from "styled-components";

const Name = styled.p`
  padding: 0 15px;
  color: ${props =>
    props.active
      ? props.theme.colors.text.darkGrey
      : props.theme.colors.text.grey};
`;

export default Name;
