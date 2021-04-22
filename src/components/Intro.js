import portrait from "../img/portrait.svg";
import { useEffect } from "react";

const Intro = () => {
  useEffect(() => {
    // !!!!!!!! SELECT ITEMS !!!!!!!!
    const greeting1 = document.getElementById("greeting1");
    const greeting2 = document.getElementById("greeting2");
    const greeting3 = document.getElementById("greeting3");
    const screenCode1 = document.getElementById("screen_code_1");
    const screenCode2 = document.getElementById("screen_code_2");
    const screenCode3 = document.getElementById("screen_code_3");
    const introName = document.getElementById("intro_name");
    const introPortraitContainer = document.getElementById(
      "intro_portrait_container"
    );

    setTimeout(() => {
      introPortraitContainer.classList.add("appear");
    }, 200);
    setTimeout(() => {
      greeting1.classList.add("appear");
      screenCode1.classList.add("appear");
    }, 400);
    setTimeout(() => {
      greeting2.classList.add("appear");
      screenCode2.classList.add("appear");
    }, 800);
    setTimeout(() => {
      greeting3.classList.add("appear");
      screenCode3.classList.add("appear");
    }, 1200);
    setTimeout(() => {
      introName.classList.add("appear");
    }, 1600);
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="intro_text">
        <div className="intro_hello">
          <span className="greeting1" id="greeting1">
            Hello.&nbsp;
          </span>
          <span className="greeting2" id="greeting2">
            Hello.&nbsp;
          </span>
          <span className="greeting3" id="greeting3">
            Hello.
          </span>
        </div>

        <div className="intro_name" id="intro_name">
          <h1>I'm Jason, a front-end developer.</h1>
        </div>
      </div>

      <div className="intro_portrait" id="intro_portrait">
        <div className="intro_portrait_container" id="intro_portrait_container">
          <img src={portrait} alt="portrait" />
          <div className="intro_portrait_screen">
            <span className="screen_code_1" id="screen_code_1">
              console.log("Hello.");
            </span>
            <span className="screen_code_2" id="screen_code_2">
              console.log("Hello.");
            </span>
            <span className="screen_code_3" id="screen_code_3">
              console.log("Hello.");
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
