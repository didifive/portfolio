import React, { useEffect } from "react";
import * as S from "./styled";
import useGithub from "../../../hooks/github-hooks";
import Repositories from "../repositories";
import NoSearch from "../no-search";
import Profile from "../profile";

const GitHubLayout = () => {
  const { githubState, getUser, getUserRepos } = useGithub();

  useEffect(() => {
    const gitHubUser = process.env.REACT_APP_GITHUB_USER;

    if (!githubState.hasUser && gitHubUser) {
      getUser(gitHubUser);
      getUserRepos(gitHubUser);
    }
  }, [githubState.hasUser, getUser, getUserRepos]);

  return (
    <>
      {githubState.loading ? (
        <S.Loading>Loading GitHub Profile...</S.Loading>
      ) : githubState.hasUser ? (
        <S.WrapperLayout>
          <Profile />
          <Repositories />
        </S.WrapperLayout>
      ) : (
        <NoSearch />
      )}
    </>
  );
};

export default GitHubLayout;
