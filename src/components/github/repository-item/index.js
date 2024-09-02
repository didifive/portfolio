import React from "react";
import * as S from "./styled";
import { FaCodeFork, FaEye, FaStar } from "react-icons/fa6";

const RepositoryItem = React.memo(
  ({ fullName, description, link, stargazers, forks, watchers, topics }) => (
    <S.Wrapper href={link} target="_new" rel="noreferrer">
      <S.WrapperTitle>{fullName}</S.WrapperTitle>

      <S.WrapperDescription>{description}</S.WrapperDescription>

      {fullName !== "my-all-repositories" && (
        <S.WrapperProperties>
          <S.Propertie>
            <FaCodeFork />
            <p>{forks}</p>
          </S.Propertie>
          <S.Propertie>
            <FaStar />
            <p>{stargazers}</p>
          </S.Propertie>
          <S.Propertie>
            <FaEye />
            <p>{watchers}</p>
          </S.Propertie>
        </S.WrapperProperties>
      )}

      <S.WrapperTopics>
        {topics.map((topic, index) => (
          <S.TopicItem key={index} index={index}>
            {topic}
          </S.TopicItem>
        ))}
      </S.WrapperTopics>
    </S.Wrapper>
  )
);

export default RepositoryItem;
