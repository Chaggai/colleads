import { NavLink, Outlet } from "react-router-dom";

const Signup = () => {
  return (
    <div className="h-screen p-7">
      <ul className="mx-auto mb-4 flex w-16 justify-around text-center">
        <li>
          <NavLink to="/signup/1">
            {({ isActive }) =>
              isActive ? (
                <img src="/public/icons/dot-filled.svg" alt="" />
              ) : (
                <img src="/public/icons/dot.svg" alt="" />
              )
            }
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup/2">
            {({ isActive }) =>
              isActive ? (
                <img src="/public/icons/dot-filled.svg" alt="" />
              ) : (
                <img src="/public/icons/dot.svg" alt="" />
              )
            }
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup/3">
            {({ isActive }) =>
              isActive ? (
                <img src="/public/icons/dot-filled.svg" alt="" />
              ) : (
                <img src="/public/icons/dot.svg" alt="" />
              )
            }
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default Signup;
