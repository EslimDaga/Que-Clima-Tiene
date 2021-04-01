import React, { Fragment,useState,useEffect } from "react";
import { Header } from "./components/Header/index";
import { Error, Form, Weather } from "./components/Home/index";

function App() {

  const [ search, saveSearch ] = useState({
    city : "",
    country : ""
  });

  const [ consult, saveConsult ] = useState(false);
  const [ result, saveResult ] = useState({});
  const [error, saveError] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const consultApi = async() => {
      if(consult){
        const appId = "cc42c6d5566e5e7f5f6caa9c2284bd28";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`
        const response = await fetch(url);
        const result = await response.json();
        saveResult(result);
        saveConsult(false);

        //Detect if have error
        if (result.cod === "404") {
          saveError(true);
        } else {
          saveError(false);
        }
      }
    }
    consultApi();
  }, [consult,city,country]);

  let component;
  if(error){
    component = <Error message = "No hay resultados"/>
  }else{
    component = <Weather
      result={result}
    />
  }

  return (
    <Fragment>
      <Header/>
      <section className="bg-home align-items-center" id="home">
        <div className="container">
          <div className="row align-items-center">
            <Form
              search = {search}
              saveSearch = {saveSearch}
              saveConsult = {saveConsult}
            />
            {component}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
