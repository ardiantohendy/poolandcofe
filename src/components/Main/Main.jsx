import instance from "../../assets/for-main.jpg";
import "../Main/Main.css";

function Main() {
  return (
    <section>
      <ul>
        <li>
          <a href="#">Pool</a>
        </li>
        <li>
          <a href="#">Cafe</a>
        </li>
        <li>
          <a href="#">Life Music</a>
        </li>
      </ul>
      <div className="content">
        <img src={instance} alt="" />
        <div className="description">
          <h1>Pool</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni incidunt cumque praesentium iusto harum sed. Quae ducimus enim sapiente? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quisquam
            exercitationem sequi, perspiciatis veniam eveniet!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Main;
