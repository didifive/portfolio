import styled from "styled-components";

export const WrapperProfile = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 1fr) minmax(900px, 4fr);
  align-items: center;
  justify-items: center;
  padding: 16px;
`;

export const ProfileAside = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  .perfil {
    border-radius: 50%;
    max-width: 350px;
    width: 100%;
    border: 0.5em solid #f5f5f5;
  }

  .linkedin {
    max-width: 80px;
    margin-top: 16px;
  }

  p {
    font-size: 1.5em;
    color: #f5f5f5;
    margin-top: 16px;
  }

  :hover {
    text-decoration: underline;
  }
`;

export const ProfileText = styled.p`
  color: #f5f5f5;

  h1 {
    font-size: 3em;
    font-weight: bold;
    margin-left: 16px;
  }

  h2 {
    font-size: 2.5em;
    font-weight: bold;
    margin-left: 16px;
    margin-top: 16px;
  }

  p {
    font-size: 1.5em;
    margin-left: 16px;
    margin-top: 12px;
  }
`;
