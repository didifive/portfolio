import React, { useEffect } from "react";
import useGithub from "../../../hooks/github-hooks";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

const Repositories = () => {
  const { githubState, getUserRepos } = useGithub();
  const shouldRenderRepos = githubState.user.login && githubState.repositories.length > 0;

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
    }
  }, [githubState.user.login, getUserRepos]);

  return shouldRenderRepos ? (
    <S.WrapperList>
      {githubState.repositories.map((item) => (
        <RepositoryItem
          key={item.id}
          fullName={item.full_name}
          link={item.html_url}
          description={item.description}
          topics={item.topics}
          language={item.language}
          stargazers={item.stargazers_count}
          forks={item.forks_count}
          watchers={item.watchers_count}
          updatedAt={item.updated_at}
        />
      ))}
    </S.WrapperList>
  ) : (
    <></>
  );
};

export default Repositories;
