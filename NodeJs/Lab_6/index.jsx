
function Name(props) {
  return <ul>
    <li>Name: {props.name}</li>
    <li>Last Name:{props.ln}</li>
    <li>Age: {props.age}</li>
  </ul>;
}


function App() {
  return (
    <div>
      <Name name="Nikita" ln="Koryakin" age="18" />
    </div>
  );
}

class ClickButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = { class: "off", label: "Нажми" };

    this.press = this.press.bind(this);
  }
  press() {
    let className = (this.state.class === "off") ? "on" : "off";
    this.setState({ class: className , label: "Yes!"});
  }
  render() {
    return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
  }
}



ReactDOM.render(
  <div>
    <App />
    <ClickButton />
  </div>,
  document.getElementById("app")
)