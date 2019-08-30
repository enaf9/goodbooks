import styled from "styled-components";

const Message = styled.div`
  font-size: ${props => props.theme.fontSizes.small};
  line-height: ${props => props.theme.lineHeights.small};
  color: ${props => props.theme.colors.complementary.red};
  margin-bottom: -15px;
  margin-top: 15px;
  text-align: center;
`;

export default Message;
