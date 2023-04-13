import { useState } from "react";
import styled from "styled-components";
import "./Form.css";

export const Form = ({ discussions, setDiscussions }) => {
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const handleChangeUser = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeQuestion = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newDiscussion = {
      id: discussions.length + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      title: title,
      url: "agora-userimg.png",
      author: username,
      answer: "❎",
      question,
    };
    setDiscussions([newDiscussion, ...discussions]);
    console.log(discussions);
  };

  return (
    <section className="form__container">
      <img src={require("../Image/agora-logo.png")} alt="아고라 숲 로고" />
      <FormContainer className="form" onSubmit={handleSubmit}>
        <FormInputWrapper className="form__input--wrapper">
          <div className="form__input--name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="  이름을 작성해줘 구리!"
              required=""
              onChange={handleChangeUser}
            />
          </div>
          <div className="form__input--title">
            <input
              type="text"
              name="name"
              id="title"
              placeholder="  제목을 작성해줘 구리!"
              required=""
              onChange={handleChangeTitle}
            />
          </div>
          <div className="form__textbox">
            <textarea
              id="story"
              name="story"
              placeholder="질문을 작성해줘 구리!"
              required=""
              onChange={handleChangeQuestion}
            ></textarea>
          </div>
        </FormInputWrapper>
        <div className="form__submit">
          <SubmitButton type="submit" className="form__submit">
            제출해줘 구리!
          </SubmitButton>
        </div>
      </FormContainer>
    </section>
  );
};
export default Form;

const SubmitButton = styled.button`
  background-color: white;
  padding: 5px;
  margin: 10px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: #f8f8f8;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
`;

const FormInputWrapper = styled.div`
  display: flex;
  height: 150px;
  width: 500px;
  flex-direction: column;
  justify-content: space-around;
  .form__input--name input {
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom-width: 1;
    border-bottom-color: #00a057;
  }
  .form__input--title input {
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom-width: 1;
    border-bottom-color: #00a057;
  }
`;
