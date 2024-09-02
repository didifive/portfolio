import React from "react";
import * as S from "./styled";

const NoSearch = () => (
  <S.Wrapper>
    <h1>:( GitHub API error</h1>
    <h2>Ocorreu um problema ao carrregar informações do perfil</h2>
    <h3>Para ver o perfil clique/toque abaixo:</h3>
    <a href="https://github.com/didifive" target="_new" rel="noreferrer">
      https://github.com/didifive
    </a>
  </S.Wrapper>
);

export default NoSearch;