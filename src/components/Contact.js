import Rainbow from "../components/Rainbow";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// image
import me from "../img/me.jpg";

const Contact = ({ icons }) => {
  return (
    <section className="contact">
      <h3>Get In Touch</h3>

      <div className="contact_container">
        <div className="contact_text">
          <p>
            For any enquiries, or just to say hello, please feel free to drop me
            a line. Looking forward to starting the conversation with you.
          </p>
          {icons
            .map((icon) => (
              <div className="btn_container" key={icon.id}>
                <div className="icon">
                  <i>
                    <FontAwesomeIcon icon={icon.sign} />
                  </i>
                </div>

                <a
                  href={icon.link}
                  target="_blank"
                  rel="noreferrer"
                  key={icon.id}
                >
                  {icon.name}
                </a>
              </div>
            ))
            .reverse()}
        </div>

        <div className="contact_image">
          <div className="contact_image_container">
            <img src={me} alt="Jason" />

            <Rainbow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
