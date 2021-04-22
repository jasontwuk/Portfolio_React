import { useEffect } from "react";

const Dots = () => {
  function addDot() {
    // !!!!!!!! SELECT ITEMS !!!!!!!!
    const header = document.querySelector("header");
    const dotsContainer = document.getElementById("dots_container");

    // !!!!!!!! VARIABLES !!!!!!!!
    const dotAmount = 100;
    const dotSize = 10;

    for (let i = 0; i < dotAmount; i++) {
      let newDot = document.createElement("div");
      let size = Math.ceil(dotSize * Math.random());

      newDot.classList.add("dot");

      newDot.style.width = size + "px";
      newDot.style.height = size + "px";
      newDot.style.top = header.offsetHeight * Math.random() + "px";
      newDot.style.left = header.clientWidth * Math.random() + "px";
      // console.log(newDot);
      dotsContainer.appendChild(newDot);
    }
  }

  function dotBlink() {
    // !!!!!!!! SELECT ITEMS !!!!!!!!
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < dots.length; i++) {
      let boolean = Math.random() * 10 > 7;
      dots[i].classList.remove("blink");
      if (boolean) {
        dots[i].classList.add("blink");
      }
    }
  }

  useEffect(() => {
    addDot();

    // *** dots blinking effect
    const header = document.querySelector("header");
    let addInterval = "";

    header.addEventListener("mouseenter", () => {
      // console.log("start");
      addInterval = setInterval(dotBlink, 3000);
    });
    header.addEventListener("mouseleave", () => {
      // console.log("stop");
      clearInterval(addInterval);
    });

    // *** In Safari, there is a display delay when switching between dark-mode and light-mode, so I added the following event listener to the sunMoonContainer...
    const sunMoonContainer = document.getElementById("sun-moon-container");
    sunMoonContainer.addEventListener("mouseenter", () => {
      // console.log("stop");
      // *** addInterval is from script.js
      clearInterval(addInterval);
    });
    sunMoonContainer.addEventListener("mouseleave", () => {
      // console.log("start");
      // *** dotBlink is from script.js
      addInterval = setInterval(dotBlink, 3000);
    });
  }, []);

  return <div className="dots_container" id="dots_container"></div>;
};

export default Dots;
