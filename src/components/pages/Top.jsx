import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import axios from "axios";

export const Top = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true});
    navigate("/users");
  }
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false});
    navigate("/users");
  }
  const onClickUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
    }).catch((err) => console.log(err));
  }
  const onClickUser1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
      console.log(res.data);
    }).catch((err) => console.log(err));
  }
  
  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般</SecondaryButton>
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のuser</button>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`