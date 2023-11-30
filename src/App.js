import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Ahihi";
  function computeFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }

  function Feature(props) {
    console.log(props);
    return (
    <div className="feature">
      <img src={props.image} alt="natural picture" className="feature-image"></img>
      <h3 className="feature-title">Title {props.title}</h3>
      <p className="feature-desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </p>
    </div>
    );
  }


  return (
    <div>
      <Feature image="https://i.pinimg.com/550x/a7/87/20/a78720c39a39ac50a2856420d636d113.jpg"
      title="Honda"></Feature>
      <Feature></Feature>
      <Feature></Feature>
    </div>
  );
}

export default App;
