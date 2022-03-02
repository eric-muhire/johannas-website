/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import {useForm} from "react-hook-form";


function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
        reset();
      };
   
    return (
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg')`,

          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <section class="py-4 bg-info">
          <div className="container">
            <div className="row">
              <div className="color-4-my-auto">
                <div className="card-body">
                  <h4>Frågor & svar</h4>
                </div>
                <div className="col-md-8 my-auto"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <br />
          <br />
          <br />
          <br />

          <div className="container">
            <div className="card shadow">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h3>Kontakta mig</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="col-form-label">Namn:</label>
              <input
                type="text"
                className={`form-control ${errors.name && "invalid"}`}
                {...register("name", { required: "Namn behövs" })}
                onKeyUp={() => {
                  trigger("name");
                }}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>
            
            <div className="form-group">
              <label className="col-form-label">Email:</label>
              <input
                type="text"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", { required: "Email is Required" ,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Telefon:</label>
              <input
                type="text"
                className={`form-control ${errors.telefon && "invalid"}`}
                {...register("phone", { required: "Telefonnummer behövs",
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                },
               })}
               onKeyUp={() => {
                trigger("phone");
              }}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Meddelande:</label>
              <textarea
                className={`form-control ${errors.message && "invalid"}`}
                {...register("message", { required: "Meddelande behövs",
                minLength: {
                  value: 10,
                  message: "Minimum Required length is 10",
                },
                maxLength: {
                  value: 50,
                  message: "Maximum allowed length is 200 ",
                }
               })}
               onKeyUp={() => {
                trigger("message");
              }}
              ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message.message}</small>
              )}
            </div>
            <input
              type="submit"
              className="btn btn-primary my-3"
              value="Send message"
            />
          </form>
        </div>
        </div>
        </div>
        </div>
      </div>
      </section>
      </div>
   
  );
}

export default Contact;