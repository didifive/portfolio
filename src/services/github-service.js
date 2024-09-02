import axios from "axios";

const apiGitHub = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
    "X-GitHub-Api-Version": "2022-11-28",
  },
});

export default apiGitHub;