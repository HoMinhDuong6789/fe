import logo from "./logo.svg";
import "./App.css";
import { FeatureData } from "./FeatureData";
import Toggle from "./state/Toggle";


function App() {


  function Feature(props) {
    console.log(props);
    return (
      <div className="feature">
        <img
          src={props.image}
          alt="natural picture"
          className="feature-image"
        ></img>
        <h3 className="feature-title">Title {props.title}</h3>
        <p className="feature-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
    );
  }

  return (
    // <div className="feature-list">
    //   {FeatureData.map((item) => {
    //     return <Feature image={item.image} title={item.title}></Feature>;
    //   })}
    //   ;
    // </div>

    <div>
      <Toggle></Toggle>
    </div>
  );
}

export default App;
