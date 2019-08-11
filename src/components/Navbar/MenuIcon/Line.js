import styled, { css } from "styled-components";

const first = css`
  margin: 5px auto 4px;
  ${props =>
    props.active
      ? css`
          margin: 4px 3px;
          transform: translateY(7px) rotate(-45deg);
        `
      : ""}
`;
const second = css`
  margin: 4px auto;
  ${props =>
    props.active
      ? css`
          opacity: 0;
        `
      : ""}
`;
const third = css`
  margin: 4px auto 5px;
  ${props =>
    props.active
      ? css`
          margin: 4px 3px;
          transform: translateY(-5px) rotate(45deg);
        `
      : ""}
`;

const Line = styled.div`
  transition: 0.4s;
  width: 18px;
  height: 2px;
  border-radius: 1px;
  background: ${props => props.theme.colors.text.darkGrey};
  ${props => (props.first ? first : props.second ? second : third)};
`;

export default Line;
