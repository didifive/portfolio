import styled from "styled-components";

const topicColors = [
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#1abc9c",
  "#16a085",
  "#27ae60",
  "#2980b9",
  "#8e44ad",
  "#2c3e50",
  "#f1c40f",
];
export const Wrapper = styled.a`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 10px;
  align-content: top;
  background-color: #f5f5f5;
  wrap-text: ellipsis;
`;

export const WrapperTitle = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  margin: 8px 0;
  color: #3182ce;
`;

export const WrapperDescription = styled.div`
  font-size: 1em;
  margin: 8px 0;
`;

export const WrapperProperties = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const Propertie = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;

  p {
    margin-left: 2px;
  }
`;

export const WrapperTopics = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

export const TopicItem = styled.span`
  background-color: ${({ index }) => topicColors[index % topicColors.length]};
  border-radius: 4px;
  padding: 4px 8px;
  margin: 4px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;
