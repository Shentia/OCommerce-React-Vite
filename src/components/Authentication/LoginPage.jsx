import React, { useState } from "react";
import "./LoginPage.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "../../services/userServices";

const schema = z.object({
  email: z
    .string()
    .email({ message: "please enter valid email address" })
    .min(3),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters" }),
});
const LoginPage = () => {
  const [formError, setFormError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (formData) => {
    try {
      await login(formData);
      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setFormError(error.response.data.message);
      }
    }
  };

  return (
    <section className="align_center form_page">
      <form className="authentication_form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name=""
              id="email"
              className="form_text_input"
              placeholder="Enter your email address"
              {...register("email")}
            />
            {errors.email && (
              <em className="form_error">{errors.email.message}</em>
            )}
          </div>
          <div>
            <label htmlFor="password">Phone Number</label>
            <input
              type="password"
              name=""
              className="form_text_input"
              id="password"
              placeholder="Enter your password "
              {...register("password")}
            />
            {errors.password && (
              <em className="form_error">{errors.password.message}</em>
            )}
          </div>
          {formError && <em className="form_error">{formError}</em>}
          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
