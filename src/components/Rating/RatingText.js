import styled from "styled-components";

const RatingText = styled.p`
  font-size: ${props => props.theme.fontSizes[props.size]};
  margin: 0 1.5px;
  display: ${props => (props.show ? "block" : "none")};
  ${props => props.count && "color: " + props.theme.colors.text.grey}
`;

export default RatingText;
