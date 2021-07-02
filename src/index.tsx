import * as React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { CardList } from "./components/CardList";

import "./components/styles.css";

function App() {
  return (
    <div className="container">
      <Header />
      <CardList />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
