import React from "react";
import "./App.css";
import Index from "./components/Index";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <Route exact path="/" component={Index}></Route>
        <Route path="/resume" component={Resume}></Route>
        <Route path="/portfolio" component={Portfolio}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Router>
    </>
  );
}

export default App;
