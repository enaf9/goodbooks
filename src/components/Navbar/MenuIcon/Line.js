import styled, { css } from "styled-components";

const first = css`
  margin: 5px auto 4px;
`;
const second = css`
  margin: 4px auto;
`;
const third = css`
  margin: 4px auto 5px;
`;

const Line = styled.div`
  width: 18px;
  height: 2px;
  border-radius: 1px;
  background: ${props => props.theme.colors.text.darkGrey};
  ${props => (props.first ? first : props.second ? second : third)};
`;

export default Line;
