import React from "react";
import * as S from "./styled";

const Footer = () => {

  return (
    <S.WrapperFooter>
      <S.FooterLink
        href="https://luiszancanela.dev"
        target="_new"
        rel="noreferrer"
      >
        https://luiszancanela.dev
      </S.FooterLink>
      <S.FooterLink
        href="https://github.com/didifive/portfolio"
        target="_new"
        rel="noreferrer"
      >
        Código desse projeto no GitHub: didifive/portifolio
      </S.FooterLink>
      <S.FooterLink
        href="https://react.dev/learn/start-a-new-react-project"
        target="_new"
        rel="noreferrer"
      >
        Aqui tem React!
      </S.FooterLink>
      <S.FooterLink
        href="https://docs.github.com/pt/rest"
        target="_new"
        rel="noreferrer"
      >
        Aqui tem API do GitHub!
      </S.FooterLink>
    </S.WrapperFooter>
  );
};

export default Footer;
