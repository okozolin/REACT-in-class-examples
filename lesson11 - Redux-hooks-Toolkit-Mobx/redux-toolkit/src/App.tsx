import React from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { Home } from "./components/Home";
import { TVShow } from "./components/tv-show/TVShow";
//import { TVShowData } from './data/TVShowData';
import store from "./redux/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/show/:id" component={TVShow} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
