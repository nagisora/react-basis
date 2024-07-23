import styled from "styled-components";
import { BaseButtion } from "./BaseButtion";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
}

const SButton = styled(BaseButtion)`
  background-color: #11999e;
`;