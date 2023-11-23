import "../Main/Main.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function MainCard(props) {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div className="content" data-aos="flip-right">
      <img src={props.image} alt={props.title} />
      <div className="description">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default MainCard;
