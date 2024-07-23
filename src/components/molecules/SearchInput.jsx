import styled from "styled-components";
import { Input } from "../atoms/input/input"
import { PrimaryButton } from "../atoms/button/PrimaryButtion"
import { memo } from "react";

export const SearchInput = memo(() => {
  console.log("SearchInput");
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtionWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtionWrapper>
    </SContainer>
  );
});

SearchInput.displayName = "SearchInput";

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtionWrapper = styled.div`
  padding-left: 8px;
`;