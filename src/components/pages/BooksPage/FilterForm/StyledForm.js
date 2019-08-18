import styled from "styled-components";

const StyledForm = styled.div`
  overflow: hidden;
  transition: height 0.7s ease-out;
  ${props => (props.isOpen ? "height: 400px;" : "height: 0px;")};

  @media (${props => props.theme.mediaQueries.tablet}) {
    grid-column: 1/3;
    ${props => (props.isOpen ? "height: 270px;" : "height: 0px;")}
  }
`;

export default StyledForm;
