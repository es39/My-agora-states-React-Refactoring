import styled from "styled-components";

const submitButton = styled.button`
    background-color: yellow;
    color: black;
`;

export const Form = () => {
    return (
        <section className="form__container">
            <img src="../Image/agora-logo.png" alt="아고라 숲 로고"/>
                <form action="" method="get" className="form">
                    <div className="form__input--wrapper">
                    <div className="form__input--name">
                        <input type="text" name="name" id="name" placeholder="  이름을 작성해줘 구리!" required="" />
                    </div>
                    <div className="form__input--title">
                        <input type="text" name="name" id="title" placeholder="  제목을 작성해줘 구리!" required="" />
                    </div>
                    <div className="form__textbox">
                        <textarea id="story" name="story" placeholder="질문을 작성해줘 구리!" required=""></textarea>
                    </div>
                    </div>
                    <div className="form__submit">
                        <button type="submit" className="submit">제출해줘 구리!</button>
                    </div>
                </form>
        </section>
    )
}
export default Form;