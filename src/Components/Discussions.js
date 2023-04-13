import React from "react";
import styled from "styled-components";
import "../index.css";
import { Discussion } from "./Discussion";

export const Discussions = ({ discussions, setDiscussions }) => {
  return (
    <section className="discussion__wrapper">
      <DiscussionsContainer>
        {discussions.map((discussion) => {
          return (
            <Discussion
              discussion={discussion}
              key={discussion.id}
            ></Discussion>
          );
        })}
      </DiscussionsContainer>
    </section>
  );
};

const DiscussionsContainer = styled.div`
  list-style-type: none;
  background-color: white;
  overflow: auto;
  height: 540px;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.4);
  &::-webkit-scrollbar {
    display: none;
  }
`;
