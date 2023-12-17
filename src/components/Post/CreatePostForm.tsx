import { useState } from "react";
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
import { toast } from "react-toastify";
import { useCategory, useCreatePostMutation } from "../../api/post";
const CreatePostForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const { data, error } = useCategory();
  const createPost = useCreatePostMutation();
  // console.log(data, error);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !tags || !category || !description || !images) {
      toast.error("Please add the required fields");
    }

    try {
      await createPost.mutateAsync({
        title,
        tags,
        category,
        description,
        images,
      });
      setTitle("");
      setCategory("");
      setDescription("");
      setTags([]);
      setTagInput("");
      setImages([]);
    } catch (error) {
      // An error occurred during the mutation
      console.error("Error creating post:", error);
      toast.error("Something went wrong. Try again later");
    }

    console.log(title, tags, category, description, images);
  };

  const handleImages = (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      setImages((prev) => [...prev, file]);
    });
  };
  const handleKeyDown = (e) => {
    if (tagInput.length > 10) {
      toast.error("Tags cannot be more than 10 characters long");
      setTagInput("");
    }

    if (e.key === "Enter") {
      e.preventDefault();

      if (tagInput.trim() !== "" && tagInput.length < 10) {
        setTags((prev) => [...prev, tagInput]);
        setTagInput("");
      }
    }
  };

  const handleTagDelete = (t) => {
    console.log(tags, t);
    const filteredTags = tags.filter((tag) => tag !== t);
    setTags(filteredTags);
  };

  return (
    <PostFormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <label htmlFor="title">Add Title</label>
        <input
          type="title"
          id="title"
          name="title"
          placeholder="Enter post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </InputContainer>
      <TagContainer>
        <label htmlFor="tags">Add Tags</label>
        <TagInput>
          {tags &&
            tags.map((t) => (
              <TagContent>
                <span>{t}</span>
                <button>
                  <IoIosClose onClick={() => handleTagDelete(t)} />
                </button>
              </TagContent>
            ))}
          <input
            type="tags"
            id="tags"
            name="tags"
            placeholder="Enter post Tags"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </TagInput>
      </TagContainer>
      <CategoryContainer>
        <label htmlFor="category">Add Post Category</label>
        <select
          name="category"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">select category</option>
          {data &&
            data.map((d) => (
              <option value={d._id} key={d._id}>
                {d.name}
              </option>
            ))}
        </select>
      </CategoryContainer>
      <DescriptionContainer>
        <label htmlFor="description">Add Post Description</label>
        <textarea
          name="description"
          id="description"
          cols={30}
          rows={10}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
          onChange={handleImages}
        />
      </InputContainer>
      <SubmitButton type="google">Create Post</SubmitButton>
      {createPost.isPending && <h1>Loading</h1>}
    </PostFormContainer>
  );
};

export default CreatePostForm;
