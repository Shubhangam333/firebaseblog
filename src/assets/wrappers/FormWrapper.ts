import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 5rem 2rem 5rem;
  gap: 1.2rem;
  font-size: 1.2rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  gap: 0.7rem;

  label {
    color: #d90429;
  }

  input {
    padding: 0.4rem;
    font-size: 1.2rem;
    border: 2px solid #8ecae6;
  }

  input.error {
    border: 2px solid #f07167;
  }

  @media (max-width: 500px) {
    width: 20rem;
  }
`;
const SubmitButton = styled.button`
  width: 30rem;
  padding: 0.5rem;
  ${(props) => props.type === "facebook" && "background-color: #3a86ff; "}
  ${(props) => props.type === "google" && "  background-color: #e63946;"}
  ${(props) =>
    props.type === "normal" && "background-color: #38a3a5; margin-top:1rem;"}
  color: white;
  font-size: 1.2rem;

  &:hover {
    ${(props) =>
      props.type === "google" && "background-color: red; opacity:0.8;"}
    ${(props) => props.type === "facebook" && "color:white opacity:0.8;"}
    ${(props) => props.type === "normal" && "background-color: #57cc99;"}
  }
  @media (max-width: 500px) {
    width: 20rem;
  }
`;

const ThirdPartyAuth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  gap: 0.7rem;

  label {
    color: #d90429;
  }
`;

const PostFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.2rem;
`;

const TagInput = styled.div`
  border: 2px solid #8ecae6;
  width: 100%;
  display: flex;
  input {
    padding: 0.4rem;
    font-size: 1.2rem;
    border: none;
    width: 100%;
  }
`;

const TagContent = styled.div`
  display: flex;
  width: max-content;
  align-items: center;
  background: #8ecae6;
  margin: 0.2rem 0.4rem;
  padding: 0rem 0.2rem;
  color: #d90429;

  button {
    background: none;
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    color: white;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  gap: 0.7rem;

  label {
    color: #d90429;
  }

  select,
  option {
    padding: 0.4rem;
    font-size: 1.2rem;
    border: 2px solid #8ecae6;
    width: 100%;
    background-color: #8ecae6;
    color: white;
  }
  option {
    background-color: #8ecae6;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  gap: 0.7rem;

  label {
    color: #d90429;
  }
  textarea {
    resize: none;
    border: 2px solid #8ecae6;
  }
`;

export {
  FormContainer,
  InputContainer,
  SubmitButton,
  ThirdPartyAuth,
  TagContainer,
  TagInput,
  TagContent,
  CategoryContainer,
  DescriptionContainer,
  PostFormContainer,
};
