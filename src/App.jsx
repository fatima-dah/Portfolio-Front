import "./App.css";
import Home from "./components/visiteur/home/Home";
import { Route, Switch } from "react-router-dom";



function App() {



  return (
    <div className="">
      <Switch>
        <Route exact path="/" component={Home}>
          <Home  />
        </Route>


      </Switch>
    </div>
  );
}

export default App;
