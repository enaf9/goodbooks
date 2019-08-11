import styled from "styled-components";

const StyledNavLink = styled.div`
  text-align: center;

  margin: 20px 30px 0px;
  border-bottom: 1px ${props => props.theme.colors.complementary.grey} solid;
  padding-bottom: 20px;
`;

export default StyledNavLink;
