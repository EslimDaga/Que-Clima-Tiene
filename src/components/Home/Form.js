import React, { useState } from "react";

const Form = () => {

  //State the form
  const [ search, saveSearch ] = useState({
    city : "",
    country : ""
  });

  const [ error, saveError ] = useState(false);

  //Extract city and country
  const { city,country } = search;

  //Function that places the elements in the state
  const handleChange = e => {
    //Updating state
    saveSearch({
      ...search,
      [ e.target.name ] : e.target.value
    });
  }

  //When the user gives submit in the form
  const handleSubmit = e => {
    e.preventDefault();
    //Validation
    if(city.trim() === "" || country.trim() === ""){
      saveError(true);
      return;
    }

    saveError(false)
    //Component principal
  }

  return (
    <div className="col-lg-5 offset-lg-1">
      <div className="home-registration-form bg-white p-5 mt-4">
        <h5 className="form-title mb-4 text-center font-weight-bold">¿Que clima tiene? 🤔</h5>
        {error ? <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Todos los datos son obligatorios!</strong>
        </div> : null}
        <form onSubmit={handleSubmit} className="registration-form">
          <label className="text-muted">Ciudad :</label>
          <input
            className="form-control mb-4 registration-input-box"
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={handleChange}
          />
          <label className="text-muted">País :</label>
          <select
            className="form-control mb-4 registration-input-box"
            placeholder="Selecciona un País"
            id="country"
            name="country"
            value={country}
            onChange={handleChange}
          >
            <option>-Selecciones un País</option>
            <option value="PE">Perú</option>
            <option value="ME">México</option>
            <option value="BO">Bolivia</option>
          </select>
          <input
            type="submit"
            value="Busca Clima"
            className="btn btn-primary w-100 mt-3"
          />
        </form>
      </div>
    </div>
  );
}

export default Form;