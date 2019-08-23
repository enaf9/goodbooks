import styled from "styled-components";

const TimeText = styled.div`
  color: ${props => props.theme.colors.text.grey};
  font-size: ${props => props.theme.fontSizes.extraSmall};
  line-height: ${props => props.theme.lineHeights.extraSmall};
  margin-top: 15px;
  justify-self: end;
`;

export default TimeText;
