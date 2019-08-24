import styled from "styled-components";
import CrossIcon from "./CrossIcon";

const DeleteIcon = styled(CrossIcon)`
  position: absolute;
  bottom: 15px;
  right: 15px;
  color: ${props => props.theme.colors.complementary.red};
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export default DeleteIcon;
