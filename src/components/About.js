import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // !!!!!!!! SELECT ITEMS !!!!!!!!
    const about = document.getElementById("about");

    setTimeout(() => {
      about.classList.add("appear");
    }, 400);
  }, []);

  return (
    <section className="about" id="about">
      <h3>About Me</h3>
      <div className="text_container">
        <div className="text_left">
          <p>
            Hi there! I’m Jason. I am a front-end developer who is
            passionate about using my coding skills to build beautiful layouts.
          </p>
          <p>
            When I worked as a web designer years ago, I wanted to implement
            some features (e.g. slider / carousel) into my designs, I looked
            through some nice open sources and was amazed by them. I was not
            only surprised at how attractive they were, but also how many were
            free. I love the spirit of “one for all, all for one” in the
            programming community, which is why I love being part of it.
          </p>
        </div>

        <div className="text_right">
          <p>
            Since then, I’ve been honing my coding skills, especially
            JavaScript. Now, I have built my own slider (hooray) and other
            projects. 
          </p>
          <p>
            As I grow as a developer, I thrive on creating responsive and user-friendly layouts from scratch, I'm also eager to add new skills to my professional range.
          </p>
        </div>
      </div>

      <div className="skills">
        <h5>My Skills</h5>
        <div className="skill_list">
          <span>
            <em>&#9900;</em>HTML
          </span>
          <span>
            <em>&#9900;</em>CSS
          </span>
          <span>
            <em>&#9900;</em>Sass
          </span>
          <span>
            <em>&#9900;</em>Tailwind
          </span>
          <span>
            <em>&#9900;</em>TypeScript
          </span>
          <span>
            <em>&#9900;</em>Next.js
          </span>
          <span>
            <em>&#9900;</em>React
          </span>
          <span>
            <em>&#9900;</em>Redux
          </span>
          <span>
            <em>&#9900;</em>JQuery
          </span>
          <span>
            <em>&#9900;</em>JavaScript ES6
          </span>
          <span>
            <em>&#9900;</em>NPM packages
          </span>
          <span>
            <em>&#9900;</em>Git
          </span>
          <span>
            <em>&#9900;</em>Firebase
          </span>
          <span>
            <em>&#9900;</em>MODX
          </span>
          <span>
            <em>&#9900;</em>Storybook
          </span>
          <span>
            <em>&#9900;</em>Adobe Suite
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
