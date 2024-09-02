import React from "react";
import useGithub from "../../../hooks/github-hooks";
import * as S from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUsers,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const { githubState } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperInfoUser>
        <div>
          <S.WrapperUserGeneric>
            <h3>Usuario:</h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </S.WrapperUserGeneric>
        </div>
        <S.WrapperStatusCount>
          <div>
            <FontAwesomeIcon icon={faUser} />
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUsers} />
            <span> {githubState.user.following}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCodeBranch} />
            <span> {githubState.user.public_repos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;