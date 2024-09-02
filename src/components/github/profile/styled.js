import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 16px;
  color: #f5f5f5;
`;

export const WrapperStatusCount = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`;

export const StatusCount = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
`;

export const StatusCountIcon = styled.div`
  font-size: 2.5em;
`;

export const StatusCountAmount = styled.div`
  margin-top: 8px;
  font-size: 1.2em;
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;

  p {
    font-size: 1.5em;
  }

  img {
    margin-top: 8px;
    width: 100px;
  }

  a {
    margin-top: 16px;
    font-size: 2em;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;
