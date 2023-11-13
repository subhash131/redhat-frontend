"use client";
import React, { ChangeEvent, useState } from "react";
import "./index.css";
import { stringify } from "querystring";

const fields = [
  {
    name: "name",
    displayName: "Name",
    type: "text",
    placeholder: "Jacket",
  },
  {
    name: "description",
    displayName: "Description",
    type: "text",
    placeholder: "Lorem...",
  },
  {
    name: "ImageUrl",
    displayName: "Image Url",
    type: "url",
    placeholder: "https://",
  },
  {
    name: "badge",
    displayName: "Badge",
    type: "text",
    placeholder: "sale",
  },
  {
    name: "originalPrice",
    displayName: "Original Price",
    type: "number",
    placeholder: "0.00",
  },
  {
    name: "offerPrice",
    displayName: "Offer Price",
    type: "number",
    placeholder: "0.00",
  },

  {
    name: "stars",
    displayName: "Ratting",
    type: "number",
    placeholder: "5",
  },
];
const Admin = () => {
  const [fieldValue, setFieldValue] = useState({
    ImageUrl: "",
    badge: "",
    name: "",
    description: "",
    originalPrice: 0,
    offerPrice: 0,
    stars: 0,
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValue({ ...fieldValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    const formattedBody = {};
  };
  return (
    <div className="demo-page ">
      <section className="mt-10 w-[80vw]">
        <h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-feather"
          >
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
            <line x1="16" y1="8" x2="2" y2="22" />
            <line x1="17.5" y1="15" x2="9" y2="15" />
          </svg>
          Admin Form
        </h1>
        <p>Add new Product</p>

        {fields.map((item) => {
          return (
            <div className="nice-form-group" key={item.name}>
              <label>{item.displayName}</label>
              <input
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                className="icon-left"
                onChange={handleChange}
              />
            </div>
          );
        })}

        <details>
          <summary>
            <button className="toggle-code bg-blue-600" onClick={handleSubmit}>
              Submit
            </button>
          </summary>
        </details>
      </section>
    </div>
  );
};

export default Admin;
