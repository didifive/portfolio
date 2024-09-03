import styled from "styled-components";

export const WrapperHeader = styled.header`
  display: grid;
  grid-template-columns: minmax(400px, 1fr) minmax(900px, 4fr);
  align-items: center;
  height: 80px;
  background-color: #f5f5f5;

  h1{
  font-size: 2.5em;
  font-weight: bold;
  margin-left: 30px;
  }

  h2 {
  font-size: 2em;}
`;

