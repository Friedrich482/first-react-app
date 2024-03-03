import React from "react";
export function GithubLogo({ gitHubLogo }) {
  return (
    <a href="https://github.com/Friedrich482">
      <img src={gitHubLogo} alt="Github Logo" className="size-8"></img>
    </a>
  );
}
