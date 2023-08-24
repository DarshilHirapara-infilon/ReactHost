import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./index.css";

const scehma = yup.object().shape({
  firstname: yup.string().required("Please enter a firstname"),
  lastname: yup.string().required("Please enter a lastname"),
  email: yup.string().email().required("Please enter a email"),
  phonenumber: yup
    .string()
    .matches(/^[6-9]\d{9}$/, {
      message: "Please enter valid number.",
      excludeEmptyString: false,
    })
    .required("Please enter a phone number"),
  range: yup
    .number()
    .min(200, "Please select a range more then 200")
    .max(13000)
    .required("Please select a range"),
  address: yup.string().required("Please enter a address"),
  city: yup.string().required("Please enter a city"),
  country: yup.string().required("Please enter a country"),
  zip: yup.string().required("Please enter a zip"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(scehma) });

  const handleData = (data) => {
    console.log(data);
  };
  const [selectedRange, setSelectedRange] = useState(0);

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedRange(selectedValue);
  };

  return (
    <div className="container form shadow p-3 mb-5 bg-body rounded">
      <form
        onSubmit={handleSubmit(handleData)}
        className="row g-3 justify-content-center form-center "
      >
        <div className="col-md-5">
          <label className="form-label">First name</label>
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            name="firstname"
            {...register("firstname")}
          />
          <p className="error">{errors.firstname?.message}</p>
        </div>
        <div className="col-md-5">
          <label className="form-label">Last name</label>
          <input
            type="text"
            className="form-control"
            id="inputPassword4"
            name="lastname"
            {...register("lastname")}
          />
          <p className="error">{errors?.lastname?.message}</p>
        </div>
        <div className="col-md-5">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            name="email"
            {...register("email")}
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="col-md-5">
          <label className="form-label">Phone number</label>
          <input
            type="text"
            className="form-control"
            name="phonenumber"
            {...register("phonenumber")}
          />
          <p className="error">{errors.phonenumber?.message}</p>
        </div>
        <label className="form-label margin-left-label">
          What is your range?
        </label>
        <input
          {...register("range")}
          type="range"
          className="form-range change-range"
          name="range"
          value={selectedRange}
          onChange={handleChange}
          min="0"
          max="13000"
        />
        <div className="range-number ms-4">
          <p className="ms-5">$0</p>
          <p className="total-range">$13000</p>
          <p>Selected Range: ${selectedRange}</p>
        </div>
        <p className="error">{errors.range?.message}</p>
        <div className="col-md-5">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Apartment, studio, or floor"
            name="address"
            {...register("address")}
          />
          <p className="error">{errors.address?.message}</p>
        </div>
        <div className="col-md-5">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            {...register("city")}
          />
          <p className="error">{errors.city?.message}</p>
        </div>
        <div className="col-md-5">
          <label className="form-label">Country</label>
          <select
            id="inputState"
            className="form-control"
            name="country"
            {...register("country")}
          >
            <option value="">Choose..</option>
            <option value="Uk">Uk</option>
            <option value="India">India</option>
          </select>
          <p className="error">{errors.country?.message}</p>
        </div>
        <div className="col-md-5">
          <label className="form-label">Zip</label>
          <input
            type="text"
            className="form-control"
            name="zip"
            {...register("zip")}
          />
          <p className="error">{errors.zip?.message}</p>
        </div>
        <div className="col-12 center-btn">
          <button type="submit" className="btn btn-primary">
            Book for free consoltion
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
