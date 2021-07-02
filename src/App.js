import './App.css';
import * as React from "react";
import { render } from "react-dom";
import { CardList } from "./components/CardList";
import { Header } from "./components/Header";
import ParallaxBar from './components/ParallaxBar';
function App() {

  return (
    <div className="App">
      {/* <ParallaxBar /> */}
      <CardList />
      <Header />
      {/* <Scroll direction="horizontal" /> */}
    </div>
  );
}

export default App;
