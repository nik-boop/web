import {BrowserRouter} from "react-router-dom";
import './App.css';
import AppNavigator from "./components/AppNavigator";

function App() {
  return (
    <BrowserRouter>
      <AppNavigator/>
    </BrowserRouter>
  );
}

export default App;
