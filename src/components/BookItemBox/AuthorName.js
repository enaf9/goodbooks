import styled from "styled-components";

const AuthorName = styled.div`
  font-size: ${props => props.theme.fontSizes.extraSmall};
  line-height: ${props => props.theme.lineHeights.extraSmall};
  color: ${props => props.theme.colors.text.grey};
`;

export default AuthorName;
