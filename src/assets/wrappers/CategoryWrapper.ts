import styled from "styled-components";

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.4rem;
  gap: 1rem;
  overflow-x: scroll;
  overflow-y: hidden;

  .category-card {
    cursor: pointer;
  }

  .cat-image-container {
    height: 15rem;
    width: 15rem;
  }

  .cat-image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.4rem;
  }
  .category-card {
    position: relative;
  }

  .category-card:hover::before {
    content: attr(data-category);
    position: absolute;
    top: 50%;
    left: 50%;
    color: red;
    transform: translate(-50%, -50%);
    text-transform: capitalize;
    font-weight: bold;
    word-spacing: 2.2rem;
    background-color: rgba(0, 0, 0, 0);
    font-size: 1.2rem;
  }

  .category-card:hover::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(142, 202, 230, 0.1);
  }
`;

export default CategoryWrapper;
