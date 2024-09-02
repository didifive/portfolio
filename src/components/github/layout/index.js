import React, { useEffect } from "react";
import * as S from "./styled";
import useGithub from "../../../hooks/github-hooks";
import Repositories from "../repositories";
import NoSearch from "../no-search";
import Profile from "../profile";

const GitHubLayout = () => {
  const {} = useGithub();
  const { githubState: { hasUser, loading }, getUser, getUserRepos } = useGithub();

  useEffect(() => {
    if (!hasUser) {
      getUser("didifive");
      getUserRepos("didifive");
    }
  }, [getUser, getUserRepos, hasUser]);

  return loading ? (
    "Carregando usuário e repositórios..."
  ) : (
    <S.WrapperLayout>
      {hasUser ? (
        <>
          <Profile />
          <Repositories />
        </>
      ) : (
        <NoSearch />
      )}
    </S.WrapperLayout>
  );
};

export default GitHubLayout;
