import React from "react";
import useGithub from "../../../hooks/github-hooks";
import * as S from "./styled";
import { FaUser, FaUsers } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";

import gitHubLogo from "../../../assets/images/logos/github.png";

const Profile = () => {
  const { githubState } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperUserGeneric>
        <p>Meu GitHub</p>
        <a href={githubState.user.html_url} target="_blank" rel="noreferrer">
          <img src={gitHubLogo} alt={githubState.user.login} />
        </a>
        <a href={githubState.user.html_url} target="_blank" rel="noreferrer">
          {githubState.user.login}
        </a>
      </S.WrapperUserGeneric>
      <S.WrapperStatusCount>
        <S.StatusCount>
          <S.StatusCountIcon>
            <SiBookstack />
          </S.StatusCountIcon>
          <S.StatusCountAmount>
            {githubState.user.public_repos}
          </S.StatusCountAmount>
        </S.StatusCount>
        <S.StatusCount>
          <S.StatusCountIcon>
            <FaUser />
          </S.StatusCountIcon>
          <S.StatusCountAmount>
            {githubState.user.followers}
          </S.StatusCountAmount>
        </S.StatusCount>
        <S.StatusCount>
          <S.StatusCountIcon>
            <FaUsers />
          </S.StatusCountIcon>
          <S.StatusCountAmount>
            {githubState.user.following}
          </S.StatusCountAmount>
        </S.StatusCount>
      </S.WrapperStatusCount>
    </S.Wrapper>
  );
};

export default Profile;
