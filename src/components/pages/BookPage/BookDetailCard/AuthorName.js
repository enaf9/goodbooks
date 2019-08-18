import styled from "styled-components";

const AuthorName = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: ${props => props.theme.lineHeights.medium};
  margin-top: 7px;
`;

export default AuthorName;
