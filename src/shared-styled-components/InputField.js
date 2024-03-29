import styled from "styled-components";

const InputField = styled.input`
  width: 315px;
  height: 40px;
  border: ${props =>
    props.isError
      ? `1px solid ${props.theme.colors.complementary.red};`
      : "none"};
  border-radius: 10px;
  padding: 0 16px;
  color: ${props => props.theme.colors.text.darkGrey};
  background: ${props =>
    props.white
      ? props.theme.colors.background.white
      : props.theme.colors.complementary.lightGrey};
  font-size: 16px;
  line-height: 19px;
  margin-top: ${props => (props.top ? props.top : 0)};
  margin-left: ${props => (props.left ? props.left : 0)};
  margin-bottom: ${props => (props.bottom ? props.bottom : 0)};
  margin-right: ${props => (props.right ? props.right : 0)};

  ::placeholder {
    color: ${props => props.theme.colors.text.grey};
  }
`;

export default InputField;
