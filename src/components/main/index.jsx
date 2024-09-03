import React from "react";
import * as S from "./styled";
import GitHubLayout from "../github/layout";
import Profile from "./perfil";

const Main = () => {
  return (
    <S.WrapperMain>
      <Profile />
      <GitHubLayout />
    </S.WrapperMain>
  );
};

export default Main;
