import React from "react";
import Logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "@/context/authContext";
import Header from "./Header";

export default function Navbar() {
  const { currentUser, logout } = useAuthContext();
  return (
    <>
    <Header />
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Site Logo" />
            </Link>
          </div>
          <div className="links">
            <Link className="link" to="/?cat=art">
              <h6>Art</h6>
            </Link>
            <Link className="link" to="/?cat=science">
              <h6>Science</h6>
            </Link>
            <Link className="link" to="/?cat=technology">
              <h6>Technology</h6>
            </Link>
            <Link className="link" to="/?cat=cinema">
              <h6>Cinema</h6>
            </Link>
            <Link className="link" to="/?cat=design">
              <h6>Design</h6>
            </Link>
            <Link className="link" to="/?cat=food">
              <h6>Food</h6>
            </Link>
            {currentUser?.id && (
              <>
                <span>{currentUser.username}</span>
                <span onClick={logout}>Logout</span>
                <span className="write">
                  <Link className="link" to="/write">
                    Write
                  </Link>
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
