import styled from "styled-components";

const PostCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 15rem;
  margin-bottom: 1.5rem;

  .image-container {
    height: 15rem;
    width: 50rem;
    flex: 1;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .post-content {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
    height: 100%;

    p {
      line-height: 1.5;
      word-spacing: 0.5;
    }
  }

  .tag-container a {
    text-decoration: none;
    color: white;
    font-size: 1.1rem;
    margin: 0rem 0.4rem;
    background: #d90429;
    padding: 0rem 0.2rem;
    border-radius: 0.2rem;
  }
  .tag-container a:hover {
    text-decoration: underline;
  }
`;

export default PostCardWrapper;
