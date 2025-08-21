import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useGetAuthUserQuery } from "../store/slice/AuthSlice";
//main desig in admin middleware, like sidebar/topbar which is seen in all route, like even if we click user/dashboard this component should be open
function AdminMiddleware() {
  // let token = localStorage.getItem("token");
  const { data, isLoading, error } = useGetAuthUserQuery();
  // console.log(user);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    window.location.href = "/login";
  }
  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  return (
    <React.Fragment>
      <div>
        <aside className="sidebar">
          <div className="brand">
            <i className="bi bi-grid-1x2-fill fs-4" />
            <div className="fw-semibold">AdminPro</div>
          </div>
          <nav className="d-grid gap-1">
            <Link className="nav-link-custom active" to="/admin">
              <i className="bi bi-speedometer2" /> Dashboard
            </Link>
            <Link className="nav-link-custom" to="/admin/users">
              <i className="bi bi-people" /> Users
            </Link>
          </nav>
        </aside>
        {/* Topbar */}
        <header className="topbar py-2">
          <div className="container-fluid px-4">
            <div className="d-flex align-items-center justify-content-between">
              <form className="d-none d-md-flex w-50">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search…"
                  aria-label="Search"
                />
              </form>
              <div className="d-flex align-items-center gap-3">
                <button
                  type="button"
                  className="btn btn-link position-relative"
                >
                  <i className="bi bi-bell fs-5" />
                </button>
                <div className="dropdown">
                  <a
                    className="d-flex align-items-center text-decoration-none dropdown-toggle"
                    href="#"
                    id="profileMenu"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person a me-2" />
                    <span>{data.user ? data.user.name : ""}</span>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="profileMenu"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={logout}>
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Content */}
      </div>
      <Outlet />
    </React.Fragment>
  );
}

export default AdminMiddleware;

// we use middleware most of the time to protect routes
//Backend middleware → Protects routes, validates requests before they reach controllers.
//Frontend middleware → Protects routes/components, avoids showing things users shouldn’t see.
