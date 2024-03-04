import React, { useState } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../buttons/PrimaryButton";

const ContactForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (form.fullName.length < 3) {
      newErrors.fullName = "must be at least 3 characters long";
    }
    if (form.subject.length < 3) {
      newErrors.subject = "must be at least 3 characters long";
    }
    // eslint-disable-next-line no-useless-escape
    if (!form.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      newErrors.email = "must be a valid email";
    }
    if (form.body.length < 3) {
      newErrors.body = "must be at least 3 characters long";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      console.log("Form data:", form);
    }
  };

  return (
    <ContactFormContainer onSubmit={handleSubmit}>
      <ContactInfoWrapper>
        <ContactInfoHeader>
          <h2>Contact</h2>
        </ContactInfoHeader>
        <ContactInfoBody>
          <label htmlFor="name">
            Full Name* <ErrorMsg>{errors.fullName}</ErrorMsg>
          </label>
          <input
            type="text"
            name="fullName"
            id="name"
            value={form.fullName}
            onChange={handleChange}
          />

          <label htmlFor="subject">
            Subject* <ErrorMsg>{errors.subject}</ErrorMsg>{" "}
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={form.subject}
            onChange={handleChange}
          />

          <label htmlFor="email">
            Email* <ErrorMsg>{errors.email}</ErrorMsg>{" "}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
          />
        </ContactInfoBody>
      </ContactInfoWrapper>
      <BodyWrapper>
        <ContactInfoHeader>
          <h3>Message *</h3>
          <ErrorMsg>{errors.body}</ErrorMsg>
        </ContactInfoHeader>
        <ContactInfoBody>
          <textarea name="body" value={form.body} onChange={handleChange} />
        </ContactInfoBody>
      </BodyWrapper>

      <PrimaryButton>Submit</PrimaryButton>
    </ContactFormContainer>
  );
};
export default ContactForm;

const ContactFormContainer = styled.form`
  display: grid;
  max-width: 400px;
`;

const BodyWrapper = styled.div`
  background-color: var(--color-secondary);
  width: 100%;
  textarea {
    width: 100%;
    box-sizing: border-box;
    outline: none;
    min-height: 100px;
  }
`;

const ContactInfoWrapper = styled.div`
  background-color: var(--color-primary);
  width: 100%;
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
    box-sizing: border-box;
    height: 35px;
    margin-bottom: 5px;
    outline: none;
  }
  label {
    color: var(--color-text-two);
  }
`;

const ContactInfoHeader = styled.div`
  text-align: center;
  h2,
  h3 {
    margin: 0;
    margin-top: 8px;
    color: var(--color-text-one);
  }
`;

const ContactInfoBody = styled.div`
  padding: 5px;
`;

const ErrorMsg = styled.span`
  font-size: 12px;
  color: var(--color-orange);
`;
