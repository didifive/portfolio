import React from "react";
import * as S from "./styled";
import me from "../../../assets/images/me.png";
import linkedinLogo from "../../../assets/images/logos/linkedin.png";

const Profile = () => {
  return (
    <S.WrapperProfile>
      <S.ProfileAside
        href="https://www.linkedin.com/in/luis-carlos-zancanela/"
        target="_new"
        rel="noreferrer"
      >
        <img src={me} alt="me" className="perfil" />
        <p>Bora conectar?</p>
        <img src={linkedinLogo} alt="linkedin logo" className="linkedin" />
      </S.ProfileAside>
      <S.ProfileText>
        <h1>Welcome! Sou Luis Zancanela</h1>
        <h2>
          Software Engineer | Developer | Java | Spring Boot | AZ-204 | APIs |
          SQL
        </h2>
        <p>
          Há mais de 2 anos, atuo com orgulho como desenvolvedor Back-End,
          utilizando principalmente{" "}
          <strong>Java, Spring Boot, Apache Camel, Azure Cloud, DevOps</strong>{" "}
          e metodologia ágil para clientes do mercado bancário trabalhando com
          <strong> APIs middlewares e gateways </strong> e atendendo diversos
          negócios.
        </p>
        <p>
          <strong>Certificados:</strong>
          <br />- Microsoft Associate:{" "}
          <strong>Azure Developer Associate (AZ-204)</strong>
          <br />- Microsoft Fundamentals: Azure Fundamentals (AZ-900), Azure
          Data Fundamentals (DP-900), Azure AI Fundamentals (AI-900) e Security,
          Compliance, and Identity Fundamentals (SC-900)
          <br />- Microsoft Applied Skills: Implementar a segurança por meio de
          um pipeline usando o Azure DevOps
        </p>
        <p>
          <strong>Tecnologias e conhecimentos:</strong>
          <br />- Back-end: Java, Spring, Quarkus, Apache Camel, TypeScript,
          Node.js e NestJS
          <br />- Front-end: JavaScript, TypeScript, Thymeleaf, HTML, CSS, React
          e Angular
          <br />- Banco de Dados e ORMs: Sybase, MySQL, Postgres, SQL Server,
          MongoDB, ORMs, JDBC e JPA
          <br />- Devops: Git, GitHub, GitLab, Azure DevOps, Terraform e Docker
          <br />- Cloud: Azure
          <br />
          - Aplicações: Microservices, MVC, Monolith, MQs, REST API e WEB
          Systems
          <br />- Código Limpo, Arquitetura Limpa, Arquitetura Cebola, TDD e
          BDD, SOLID, 12Factors, testes unitários, testes de integração e testes
          e2e.
          <br />- Testes: JUnit
          <br />- Monitoramento: Splunk e Azure Monitor
        </p>
        <p>
          <strong>
            Sou apaixonado por tecnologia e adoro aprender e compartilhar
            conhecimento, especialmente quando acompanhado de café.
          </strong>
        </p>
        <p>
          <strong>#LifeLongLearning #OpenToHelp #OpenToShare</strong>
        </p>
      </S.ProfileText>
    </S.WrapperProfile>
  );
};

export default Profile;
