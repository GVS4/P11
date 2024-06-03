import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../public/images/argentBankLogo.webp";
import { logout } from "../../actions/userActions";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
        </Link>
        <div className="nav-right">
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="user-info">
                <FontAwesomeIcon icon={faUserCircle} />{" "}
                {userInfo?.userName || userInfo?.firstName}
              </Link>
              <a className="main-nav-item" onClick={handleSignOut}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
              </a>
            </>
          ) : (
            <Link className="main-nav-item" to="/login">
              <FontAwesomeIcon icon={faUserCircle} /> Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
