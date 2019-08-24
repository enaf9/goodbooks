import styled from "styled-components";

const TextArea = styled.textarea`
  width: 100%;
  height: 115px;
  border-radius: 10px;
  padding: 10px 16px;
  color: ${props => props.theme.colors.text.darkGrey};
  background: ${props => props.theme.colors.background.white};
  font-size: 16px;
  line-height: 19px;
  border: 0.7px solid ${props => props.theme.colors.complementary.grey};

  ::placeholder {
    color: ${props => props.theme.colors.text.grey};
  }
`;

export default TextArea;
