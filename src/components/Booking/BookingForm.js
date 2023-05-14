import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useParams } from "react-router-dom";
import { addToDb } from "../../utilities/localStorage/localStorage";
import "./BookingForm.css";

const BookingForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const { shows } = useAuth();

  const bookingShow = shows.find((show) => show?.show.id === Number(id));

  const onSubmit = (data) => {
    const userData = {
      name: data.name,
      email: data.email,
      movie: data.movieName,
    };
    addToDb(userData);
    console.log(userData);
    alert("Movie ticket booked successfully");
    reset();
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5">Booking</h1>
      <div className="text-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Movie Name"
            defaultValue={bookingShow?.show.name}
            {...register("movieName")}
          />{" "}
          <br />
          <input
            placeholder="User Name"
            {...register("name", { required: true, maxLength: 20 })}
          />{" "}
          <br />
          <input placeholder="Email" {...register("email")} /> <br />
          <input placeholder="Phone Number" {...register("number")} /> <br />
          <input className="input-btn" type="submit" />
        </form>
        <Link
          to="/"
          className=""
          style={{ textDecoration: "none", color: "seagreen" }}
        >
          <div className="d-flex justify-content-center align-items-center text-center container mx-auto mt-5 mb-5 w-75">
            <h2>Back to home page</h2>

            <ion-icon
              style={{ fontSize: 32, margin: 20 }}
              name="arrow-forward-outline"
            ></ion-icon>

            <span className="">
              <ion-icon style={{ fontSize: 32 }} name="home-outline"></ion-icon>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BookingForm;
