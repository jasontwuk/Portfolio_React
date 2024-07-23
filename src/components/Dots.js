import { useEffect } from "react";

const Dots = () => {
  function addDot() {
    // !!!!!!!! SELECT ITEMS !!!!!!!!
    const header = document.querySelector("header");
    const dotsContainer = document.getElementById("dots_container");

    // *** return when header or dotsContainer not exist
    if (!header || !dotsContainer) return;

    // !!!!!!!! VARIABLES !!!!!!!!
    const dotAmount = 100;
    const dotSize = 10;

    for (let i = 0; i < dotAmount; i++) {
      let newDot = document.createElement("div");
      let size = Math.ceil(dotSize * Math.random());

      newDot.classList.add("dot");

      newDot.style.width = `${size}px`;
      newDot.style.height = `${size}px`;
      newDot.style.top = `${header.offsetHeight * Math.random()}px`;
      newDot.style.left = `${header.clientWidth * Math.random()}px`;
      // console.log(newDot);
      dotsContainer.appendChild(newDot);
    }
  }

  function dotBlink() {
    // !!!!!!!! SELECT ITEMS !!!!!!!!
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < dots.length; i++) {
      // *** make about 30% of the dots blink
      let boolean = Math.random() * 10 > 7;

      // *** remove previous blink status
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
    let blinkInterval = null;

    const startBlinking = () => {
      // console.log("mouse moving");
      
      if(!blinkInterval) {
        // console.log("start");
        dotBlink();
        blinkInterval = setInterval(dotBlink, 3000);
      }
    };

    const stopBlinking = () => {
      if (blinkInterval) {
        // console.log("stop");
        clearInterval(blinkInterval);
        blinkInterval = null;
      }
    };

    if (header) {
      header.addEventListener("mouseover", startBlinking);
      header.addEventListener("mouseleave", stopBlinking);
    }

    return () => {
      if (header) {
        header.removeEventListener("mouseover", startBlinking);
        header.removeEventListener("mouseleave", stopBlinking);
      }

      // *** Clear interval when the component unmounts
      stopBlinking(); 
    };
  }, []);

  return <div className="dots_container" id="dots_container"></div>;
};

export default Dots;
