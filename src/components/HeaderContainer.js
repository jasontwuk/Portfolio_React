import logo from "../img/logo_blue.svg";
import Media from "../components/Media";
import SunMoon from "../components/SunMoon";
import { Link } from "react-router-dom";

const HeaderContainer = ({ icons }) => {
  return (
    <div className="header_container" id="header_container">
      <Link to="/" title="Home - Jason Liao">
        <div className="header_right">
          <img src={logo} alt="logo" />
          <h3>
            Jason
            <br />
            Liao
          </h3>
        </div>
      </Link>

      <div className="header_left">
        <SunMoon />
        <Media icons={icons} />
      </div>
    </div>
  );
};

export default HeaderContainer;
