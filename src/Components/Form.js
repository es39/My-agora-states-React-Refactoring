import styled from "styled-components";
import './Form.css';

const SubmitButton = styled.button`
    background-color: white;
    padding: 5px;
    margin: 10px;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        background-color: #f8f8f8;
    }
`;

const FormContainer = styled.form `
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
`

const FormInputWrapper = styled.div `
    display: flex;
    height: 150px;
    width: 500px;
    flex-direction: column;
    justify-content: space-around;
`

const handleSubmit = (event) => {
    event.preventDefalut()
}

export const Form = () => {
    return (
        <section className="form__container">
            <img src={require("../Image/agora-logo.png")} alt="아고라 숲 로고"/>
                <FormContainer action="" method="get" className="form">
                    <FormInputWrapper className="form__input--wrapper">
                    <div className="form__input--name">
                        <input type="text" name="name" id="name" placeholder="  이름을 작성해줘 구리!" required="" />
                    </div>
                    <div className="form__input--title">
                        <input type="text" name="name" id="title" placeholder="  제목을 작성해줘 구리!" required="" />
                    </div>
                    <div className="form__textbox">
                        <textarea id="story" name="story" placeholder="질문을 작성해줘 구리!" required=""></textarea>
                    </div>
                    </FormInputWrapper>
                    <div className="form__submit">
                        <SubmitButton onClick={handleSubmit} type="submit" className="form__submit">제출해줘 구리!</SubmitButton>
                    </div>
                </FormContainer>
        </section>
    )
}
export default Form;