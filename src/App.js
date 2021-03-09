import "./App.css";
import Header from "./components/Header/Header.jsx";
import Intro from "./components/Intro/Intro.jsx";
import Contacts from "./components/Intro/contacts/Contacts";
import About from "./components/Intro/About/About";
import User from "./components/Intro/User/User";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <div className="card">
            <User />
          </div>
          <div className="card">
            <Route path="/about" component={About} />
          </div>
          <div className="card">
            <Route path="/contacts" component={Contacts} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
