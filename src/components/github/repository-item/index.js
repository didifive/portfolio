import React from "react";
import * as S from "./styled";

const RepositoryItem = React.memo(({ fullName, description, link, topics }) => (
  <S.Wrapper>
    <S.WrapperLink href={link} target="_new" rel="noreferrer">
      {fullName}
    </S.WrapperLink>
    <S.WrapperDescription>{description}</S.WrapperDescription>
    <S.WrapperTopics>
      {topics.map((topic, index) => (
        <S.TopicItem key={index} index={index}>
          {topic}
        </S.TopicItem>
      ))}
    </S.WrapperTopics>
  </S.Wrapper>
));

export default RepositoryItem;
