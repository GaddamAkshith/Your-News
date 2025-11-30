import React, { useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../store/action";
import { navbarBrand, navs } from "../../config/config";
import logoImage from "../Images/logoImage.png";
import "../NavBar/NavBar.css";

function NavBar() {
  const navigate = useNavigate();

  const navRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
    setSearchQuery("");
    setIsCollapsed(true);
  };

  const handleNavClick = () => {
    setIsCollapsed(true);
  };

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  const isSearchButtonDisabled = searchQuery.trim() === "";

  return (
    <>
      <Navbar
        ref={navRef}
        className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}
        variant="dark"
        expand="lg"
        fixed="top"
        expanded={!isCollapsed}
      >
        <Button
          variant="outline-secondary"
          onClick={handleDarkModeToggle}
          className="dark-mode-toggle"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
        <Navbar.Brand className="nav-brand" href="/">
          <img src={logoImage} alt="Logo" className="logo" />
          {navbarBrand}
        </Navbar.Brand>
        {isCollapsed && (
          <Navbar.Toggle
            className="border-0"
            aria-controls="basic-navbar-nav"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        )}

        {!isCollapsed && (
          <IoCloseOutline
            size={40}
            className="close-btn"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        )}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" onClick={handleNavClick}>
            {navs.map((navItem) => (
              <LinkContainer to={navItem.page} key={uuidv4()}>
                <Nav.Link className="nav-item">{navItem.nav}</Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
          <Form className="search-form" onSubmit={handleSubmit}>
            <FormControl
              type="text"
              placeholder="Explore news..."
              className="form-input form-control-lg mt-lg-2 mt-md-2 mt-sm-2 mt-xl-0"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <Button
              className="search-btn mt-lg-2 ml-2 mt-md-2 mt-sm-2 mt-xl-0"
              onClick={handleSubmit}
              disabled={isSearchButtonDisabled}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
