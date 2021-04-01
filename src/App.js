import React, { Fragment } from "react";
import { Header } from "./components/Header/index";
import { Form, Result } from "./components/Home/index";

function App() {
  return (
    <Fragment>
      <Header/>
      <section className="bg-home align-items-center" id="home">
        <div className="container">
          <div className="row align-items-center">
            <Result/>
            <Form/>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
