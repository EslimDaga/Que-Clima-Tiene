import React from "react";
import PropTypes from "prop-types";

const Weather = ({result}) => {

  //Extract Values
  const { name,main } = result;

  if(!name){
    return null;
  }

  //ºKelvin
  const kelvin = 273.15;

  return (
    <div className="col-lg-6">
      <div className="home-contact mt-4">
        <h1 className="home-title mt-3">El clima de {name} es :</h1>
        <h1 className="counter-count text-primary">
          {parseInt(main.temp - kelvin)}
          <span> &#x2103; </span>
        </h1>
        <p className="text-primary font-weight-bold">La temperatura máxima de {name} es :</p>
        <h4 className="counter-count text-primary">
          {parseInt(main.temp_max - kelvin)}
          <span> &#x2103; </span>
        </h4>
        <p className="text-primary font-weight-bold">La temperatura minima de {name} es :</p>
        <h4 className="counter-count text-primary">
          {parseInt(main.temp_min - kelvin)}
          <span> &#x2103; </span>
        </h4>
      </div>
    </div>
  );
}

Weather.propTypes = {
  result : PropTypes.object.isRequired
}

export default Weather;