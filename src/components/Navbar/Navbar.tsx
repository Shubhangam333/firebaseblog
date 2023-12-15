import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  NavbarWrapper,
  Button,
  AvatarMenu,
} from "../../assets/wrappers/NavbarSection";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { useCheckAuthStatus, useLogout } from "../../api/user";
import { UserContext } from "../../context/UserContextProvider";
// import { UserContext } from "../../context/UserContextProvider";
const navItems = [
  { id: 1, path: "/", name: "Home" },
  { id: 3, path: "/about", name: "About" },
];
const buttonItems = [
  { id: 4, path: "/signin", name: "Sign In" },
  { id: 5, path: "/signup", name: "Sign Up" },
];

const Navbar: React.FC<HTMLElement> = () => {
  const { user, isAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const Logout = useLogout();

  const handleLogout = async () => {
    Logout.mutate();
  };
  return (
    <>
      <NavbarWrapper className={`${active ? "active" : ""}`}>
        <List className={`${active ? "active" : ""}`}>
          {navItems.map((nav) => (
            <ListItem key={nav.id}>
              <Link to={`${nav.path}`}>{nav.name}</Link>
            </ListItem>
          ))}

          {isAuthenticated && (
            <ListItem key={"2"}>
              <Link to={`/create-blog`}>Create</Link>
            </ListItem>
          )}
        </List>

        {!isAuthenticated && (
          <>
            <List className={`auth-container ${active ? "active" : ""}`}>
              {buttonItems.map((nav) => (
                <ListItem key={nav.id}>
                  <Button onClick={() => navigate(`${nav.path}`)}>
                    {nav.name}
                  </Button>
                </ListItem>
              ))}
            </List>
          </>
        )}
        {isAuthenticated && user && (
          <>
            <List className={`auth-container ${active ? "active" : ""}`}>
              <ListItem>
                <AvatarMenu>
                  <img src={user.avatar} alt="" />
                  <div className="dropdown-section">
                    <button onClick={() => navigate("/profile")}>
                      {user.name}
                    </button>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                </AvatarMenu>
              </ListItem>
            </List>
          </>
        )}
        <List className={`menu-container ${active ? "active" : ""} open`}>
          <ListItem>
            <Button className="menu-btn " onClick={() => setActive(true)}>
              {" "}
              <RxHamburgerMenu className="menu-icon" />
            </Button>
          </ListItem>
        </List>
        <List className={`menu-container ${active ? "active" : ""} close`}>
          <ListItem>
            <Button className="menu-btn " onClick={() => setActive(false)}>
              {" "}
              <IoCloseOutline className="menu-icon close" />
            </Button>
          </ListItem>
        </List>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
