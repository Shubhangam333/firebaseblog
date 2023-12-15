import styled from "styled-components";

const NavbarWrapper = styled.nav`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;

  @media (max-width: 500px) {
    &.active {
      flex-direction: column;
      justify-content: center;
      gap: 1.4rem;
      background-color: var(--nav-primary-color);
      position: fixed;
      inset: 0;
      font-size: 1.8rem;
    }
    /* display: none; */
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  align-items: center;

  &.menu-container {
    display: none;
  }

  @media (max-width: 500px) {
    display: none;
    &.active {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.4rem;
    }
    &.menu-container {
      position: absolute;
      top: 0.5rem;
      right: 1rem;
    }
    &.menu-container.open {
      display: flex;
    }
    &.menu-container.active.open {
      display: none;
    }
    &.menu-container.active.close {
      display: flex;
    }

    &.auth-container {
      flex-direction: row;
      gap: 1rem;
    }
  }
`;
const ListItem = styled.li`
  a {
    text-decoration: none;
    padding: 0.5rem 0.6rem;
    position: relative;
    color: black;
  }
  a:hover {
    background-color: var(--nav-primary-color);
    color: white;
  }
  a:hover::after {
    content: "";
    position: absolute;
    bottom: -0.6rem;
    left: 0;
    width: 0rem;
    height: 0rem;
    border-top: 0.4rem solid var(--nav-primary-color);
    border-left: 0.4rem solid var(--nav-primary-color);
    border-right: 0.4rem solid transparent;
    border-bottom: 0.4rem solid transparent;
  }
  @media (max-width: 500px) {
    a {
      color: white;
    }
  }
`;
const Button = styled.button`
  font-size: 1.1rem;
  padding: 0.4rem 0rem;
  cursor: pointer;
  border: 2px solid var(--nav-primary-color);
  border-radius: 0.5rem;
  width: 4.5rem;
  margin-right: 1rem;

  &:hover {
    background-color: var(--nav-primary-color);
    color: white;
  }

  &.menu-btn {
    padding: 0rem 0rem;
    cursor: pointer;
    border: none;
    border-radius: 0;
    margin-right: 0rem;
    width: 100%;
    background: none;
  }

  .menu-icon {
    font-size: 1.6rem;
  }
  .menu-icon.close {
    color: white;
    font-size: 2rem;
  }
`;

export const AvatarMenu = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 50%;
    cursor: pointer;
  }
  .dropdown-section {
    position: absolute;
    top: 2.7rem;
    right: 0;
    border: 2px solid var(--nav-primary-color);

    width: 8rem;
    display: none;
    button {
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
      width: 100%;
    }

    button:hover {
      background-color: var(--nav-primary-color);
      color: white;
    }

    &::before {
      content: "";
      top: -1.4rem;
      right: -0.2rem;
      position: absolute;
      width: 0rem;
      height: 0rem;
      border-bottom: 0.7rem solid var(--nav-primary-color);
      border-left: 0.7rem solid transparent;
      border-right: 0.7rem solid transparent;
      border-top: 0.7rem solid transparent;
      transform: translateX(-90deg);
    }
  }

  &:hover .dropdown-section {
    display: block;
  }
`;
export { NavbarWrapper, List, ListItem, Button };
