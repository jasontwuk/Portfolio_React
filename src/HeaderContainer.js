import logo from "./img/logo_blue.svg";
import Media from "./Media";
import SunMoon from "./SunMoon";
import { Link } from "react-router-dom";

const HeaderContainer = ({ icons }) => {
  return (
    <div className="header_container" id="header_container">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <div className="header_left">
        <SunMoon />
        <Media icons={icons} />
      </div>
    </div>
  );
};

export default HeaderContainer;
