import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 16px;
`;

export const WrapperStatusCount = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const StatusCount = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
`;

export const StatusCountIcon = styled.div`
  font-size: 3em;
`;

export const StatusCountAmount = styled.div`
  font-size: 1.5em;
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;

  img {
    width: 100px;
  }

  a {
    font-size: 2em;
    color: blue;
    font-weight: bold;
  }
`;
