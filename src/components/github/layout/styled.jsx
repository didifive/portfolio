import styled from "styled-components";

export const WrapperLayout = styled.section`
  display: grid;
  grid-template-columns: minmax(200px, 1fr) minmax(900px, 4fr);
  margin: 16px;
`;


export const Loading = styled.div`
  padding: 30px 10px;
  color: #f5f5f5;
  font-size: 3em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
