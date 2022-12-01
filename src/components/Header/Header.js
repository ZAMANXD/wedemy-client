import React, { useContext } from 'react';
// import { FaSun, FaMoon, FaUserCircle } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReactTooltip from 'react-tooltip';
import './Header.css';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const signOut = () => {
    logOut();
    navigate('/login');
  };
  return (
    <div className="navbar  shadow">
      <div className="flex w-full items-center justify-between">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink eventkey="1" to="/" end>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink eventkey="2" to="/courses" end>
                  TOP COURSES
                </NavLink>
              </li>
              <li>
                <NavLink eventkey="3" to="/blogs" end>
                  BLOGS
                </NavLink>
              </li>

              <li>
                <NavLink eventkey="5" to="/login" end>
                  SIGN IN
                </NavLink>
              </li>
              <li>
                <NavLink eventkey="6" to="/signup" end>
                  SIGN UP
                </NavLink>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-3xl logoBtn" to="/">
            <img
              src="https://zamanxd.github.io/images/wedemy.png"
              className="logo w-100 mr-2"
              alt=""
            />
          </Link>
        </div>
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink eventkey="1" to="/" end>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink eventkey="2" to="/courses" end>
                TOP COURSES
              </NavLink>
            </li>
            <li>
              <NavLink eventkey="3" to="/blogs" end>
                BLOGS
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="">
          {user ? (
            // display user image
            <div className="flex items-center justify-center">
              <Link
                to="/dashboard"
                data-tip={user.displayName ? user.displayName : user.email}
                className="tooltip hover:tooltip-open tooltip-success tooltip-bottom"
              >
                <div className="flex items-center justify-center">
                  <div className="mr-3">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt=""
                        className="w-10 h-10 rounded-full dp"
                      />
                    ) : (
                      <FaUserCircle className="block mx-auto my-4 text-4xl"></FaUserCircle>
                    )}
                  </div>
                  <div className="mr-3">Dashboard</div>
                </div>
              </Link>
              <ul className="menu menu-horizontal p-0">
                <li>
                  <NavLink eventkey="7" to="/addcourse" end>
                    Add Course
                  </NavLink>
                </li>
                <li>
                  <NavLink eventkey="8" to="/myreview" end>
                    My Review
                  </NavLink>
                </li>
              </ul>
              <button onClick={signOut} className="btn btn-ghost ml-2">
                Sign Out
              </button>
            </div>
          ) : (
            <div>
              <NavLink to="/login" className="btn btn-ghost hid">
                Sign In
              </NavLink>
              <NavLink to="/signup" className="btn btn-ghost hid">
                Sign Up
              </NavLink>
            </div>
          )}
        </div>
        <ReactTooltip />
      </div>
    </div>
  );
};

export default Header;
