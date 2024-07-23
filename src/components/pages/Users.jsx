import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

const users = [...Array(10).keys()].map(((val) =>{
  return {
    id: val,
    name: `なぎそら-${val}`,
    image: "https://placedog.net/200",
    email: "11111@aaa.com",
    phone: "000-00000-0000",
    company: {
      name: "テスト株式会社"
    },
    website: "htttttttttttttttt.com"
  };
}));
export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  if (!userInfo) return null;
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin});

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea> 
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;