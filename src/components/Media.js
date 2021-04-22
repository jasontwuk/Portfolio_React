import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const Media = ({ icons }) => {
  return (
    <div className="media">
      {icons.map((icon) => (
        <a href={icon.link} target="_blank" rel="noreferrer" key={icon.id}>
          <i>
            <FontAwesomeIcon icon={icon.sign} />
          </i>
        </a>
      ))}
    </div>
  );
};

export default Media;
