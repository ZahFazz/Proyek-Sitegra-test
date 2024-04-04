import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useState } from "react";

const Component = ({ handleEmailChange }) => {
  return (
    <Form className="[border:none] bg-[transparent] self-stretch font-body-h4 text-mini text-gray-100 z-[1]">
      <Form.Control type="email" placeholder="Email address" onChange={handleEmailChange}/>
    </Form>
  );
};

export default Component;
