import styled from "styled-components";

const StyledSignInForm = styled.div`
  display: none;
  background: ${props => props.theme.colors.complementary.lightGrey};
  width: 470px;
  height: 350px;
  border-radius: 10px;
  padding: 47px 77px 27px;
  text-align: right;

  @media (${props => props.theme.mediaQueries.desktop}) {
    display: block;
  }
`;

export default StyledSignInForm;
