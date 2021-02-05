import { useEffect } from "react";

const SunMoon = () => {
  // *** initialize sun or moon mode based on the user's last choice,
  // *** also keep the same mode when the user enters other web pages
  useEffect(() => {
    // !!!!!!!! SELECT ITEMS !!!!!!!!
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");

    // *** read data from localStorage
    let darkModeFlag = JSON.parse(localStorage.getItem("darkModeFlag"));

    if (darkModeFlag) {
      document.body.classList.add("dark-mode");
      sun.style.display = "none";
      moon.style.display = "block";
    } else {
      document.body.classList.remove("dark-mode");
      sun.style.display = "block";
      moon.style.display = "none";
    }
  }, []);

  const handleClick = () => {
    // !!!!!!!! SELECT ITEMS !!!!!!!!
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");

    // *** switch sun or moon mode
    let isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
      document.body.classList.remove("dark-mode");
      // *** save data to localStorage
      localStorage.setItem("darkModeFlag", JSON.stringify(false));
    } else {
      document.body.classList.add("dark-mode");
      // *** save data to localStorage
      localStorage.setItem("darkModeFlag", JSON.stringify(true));
    }

    if (moon.style.display !== "block") {
      sun.style.display = "none";
      moon.style.display = "block";
    } else {
      sun.style.display = "block";
      moon.style.display = "none";
    }
  };

  return (
    <div
      className="sun-moon-container"
      id="sun-moon-container"
      onClick={handleClick}
    >
      <div className="sun" id="sun">
        <div className="sunshine"></div>
        <div className="sunshine rotate1"></div>
        <div className="sunshine rotate2"></div>
        <div className="sunshine rotate3"></div>
        <div className="sunshine rotate4"></div>
        <div className="sunshine rotate5"></div>
        <div className="sunshine rotate6"></div>
        <div className="sunshine rotate7"></div>
        <div className="sunshine rotate8"></div>
        <div className="sunshine rotate9"></div>
        <div className="sunshine rotate10"></div>
        <div className="sunshine rotate11"></div>
      </div>

      <div className="moon" id="moon">
        <div className="star-container">
          <div className="star"></div>
        </div>
      </div>
    </div>
  );
};

export default SunMoon;
