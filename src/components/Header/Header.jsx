import "../Header/Header.css";
import TabButton from "../TabButton/TabButton";

function Header() {
  return (
    <header>
      <h1>
        .club. <span></span>
      </h1>
      <h2>Pool & Cafe</h2>
      <ul>
        <TabButton>Reservation</TabButton>
        <TabButton>Waiting List</TabButton>
      </ul>
    </header>
  );
}

export default Header;
