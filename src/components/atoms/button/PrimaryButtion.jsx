import styled from "styled-components";
import { BaseButtion } from "./BaseButtion";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
}

const SButton = styled(BaseButtion)`
  background-color: #40514e;
`;