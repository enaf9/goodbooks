import styled from "styled-components";

const Title = styled.div`
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: ${props => props.theme.lineHeights.medium};
  font-weight: bold;
  margin-top: 10px;
`;

export default Title;
