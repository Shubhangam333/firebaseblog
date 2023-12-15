import {
  CategoryContainer,
  DescriptionContainer,
  InputContainer,
  PostFormContainer,
  SubmitButton,
  TagContainer,
  TagContent,
  TagInput,
} from "../../assets/wrappers/FormWrapper";
import { IoIosClose } from "react-icons/io";
const CreatePostForm = () => {
  return (
    <PostFormContainer>
      <InputContainer>
        <label htmlFor="title">Add Title</label>
        <input
          type="title"
          id="title"
          name="title"
          placeholder="Enter post title"
        />
      </InputContainer>
      <TagContainer>
        <label htmlFor="tags">Add Tags</label>
        <TagInput>
          <TagContent>
            <span>name</span>
            <button>
              <IoIosClose />
            </button>
          </TagContent>
          <input
            type="title"
            id="title"
            name="title"
            placeholder="Enter post Tags"
          />
        </TagInput>
      </TagContainer>
      <CategoryContainer>
        <label htmlFor="category">Add Post Category</label>
        <select name="category" id="category">
          <option value="">Developer</option>
        </select>
      </CategoryContainer>
      <DescriptionContainer>
        <label htmlFor="description">Add Post Description</label>
        <textarea
          name="description"
          id="description"
          cols={30}
          rows={10}
        ></textarea>
      </DescriptionContainer>
      <InputContainer>
        <label htmlFor="images">Add Images</label>
        <input
          type="file"
          accept="image/*"
          multiple
          id="images"
          name="images"
        />
      </InputContainer>
      <SubmitButton type="google">Create Post</SubmitButton>
    </PostFormContainer>
  );
};

export default CreatePostForm;
