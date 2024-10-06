import "./Header.css";
import reactImg from "../../assets/react-core-concepts.png";

const reactDescriptions = ["Fundamentals", "Crucual", "Core"];

export default function Header() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[getRandomInt(3)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}
