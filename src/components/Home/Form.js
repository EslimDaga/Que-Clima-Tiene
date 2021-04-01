import React from "react"

const Form = () => {
  return (
    <div className="col-lg-5 offset-lg-1">
      <div className="home-registration-form bg-white p-5 mt-4">
        <h5 className="form-title mb-4 text-center font-weight-bold">Get 30 day FREE Trial</h5>
        <form className="registration-form">
          <label className="text-muted">First Name</label>
          <input type="text" id="exampleInputName1" className="form-control mb-4 registration-input-box" />
          <label className="text-muted">Last Name</label>
          <input type="text" id="exampleInputName2" className="form-control mb-4 registration-input-box" />
          <label className="text-muted">Email</label>
          <input type="email" id="exampleInputEmail1" className="form-control mb-4 registration-input-box" />
          <button className="btn btn-primary w-100 mt-3">Free Trial</button>
        </form>
      </div>
    </div>
  );
}

export default Form;