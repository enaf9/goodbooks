import styled from "styled-components";
import Image from "../../../../images/banner.jpg";

const StyledBanner = styled.div`
  display: none;
  width: 100vw;
  margin: 0 -70px 40px;
  height: 440px;
  background: linear-gradient(
      180deg,
      rgba(49, 127, 199, 0) -7.67%,
      #5f98cd 100%
    ),
    url(${Image}) no-repeat center;
  background-size: 100% auto;
  @media (${props => props.theme.mediaQueries.tablet}) {
    display: block;
  }

  @media (${props => props.theme.mediaQueries.desktop}) {
    margin: 0 -130px 40px;
  }
`;

export default StyledBanner;
