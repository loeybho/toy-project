import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Todo List :)</h1>
      <nav>
        <div>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "meue-selected" : "menu"
                }
                to="home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "meue-selected" : "menu"
                }
                to="home"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "meue-selected" : "menu"
                }
                to="home"
              >
                TodoList
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
