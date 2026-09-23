import "./NavBar.css";
import { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <nav className="nav-bar-container">
                <div className="nav-logo">
                    📚 <span>BookStore</span>
                </div>

                <div className="nav-links">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        <span className="nav-icon">📖</span>
                        Books
                    </NavLink>

                    <NavLink
                        to="/addBook"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        <span className="nav-icon">➕</span>
                        Add Book
                    </NavLink>
                    <NavLink
                        to="/Cart"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        <span className="nav-icon"></span>
                        Cart
                    </NavLink>
                </div>
            </nav>
        );
    }
}

export default NavBar;