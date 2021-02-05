import logo from "./img/logo_blue.svg";
import Media from "./Media";
import SunMoon from "./SunMoon";

const HeaderContainer = ({ icons }) => {
  return (
    <div className="header_container" id="header_container">
      <a href="index.html">
        <img src={logo} alt="logo" />
      </a>

      <div className="header_left">
        <SunMoon />
        <Media icons={icons} />
      </div>
    </div>
  );
};

export default HeaderContainer;
