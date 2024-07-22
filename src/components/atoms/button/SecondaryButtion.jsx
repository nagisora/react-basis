import styled from "styled-components";
import { BaseButtion } from "./BaseButtion";

export const SecondaryButtion = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
}

const SButton = styled(BaseButtion)`
  background-color: #11999e;
`;