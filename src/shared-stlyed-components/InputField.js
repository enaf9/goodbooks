import styled from "styled-components";

const InputField = styled.input`
  width: 315px;
  height: 40px;
  border: none;
  border-radius: 10px;
  padding: 0 16px;
  color: ${props => props.theme.colors.text.darkGrey};
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
