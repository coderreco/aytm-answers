"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./RequestDemoFormModal.module.css";

export function RequestDemoFormModal({
  as: _Component = _Builtin.Block,
  formHeading = "Request a demo",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "contact-modal_content-wrapper")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "margin-vertical", "margin-medium")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "form-field-wrapper")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(
              _styles,
              "heading-secondary",
              "text-color-white"
            )}
            tag="h2"
          >
            {formHeading}
          </_Builtin.Heading>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.FormWrapper
        className={_utils.cx(_styles, "contact-modal_form-block")}
      >
        <_Builtin.FormForm
          className={_utils.cx(_styles, "contact-modal_form")}
          name="wf-form-Demo-Request-Modal"
          data-name="Demo Request Modal"
          action="https://api.hsforms.com/submissions/v3/integration/submit/5412639/f706ec88-0c00-423e-b513-6ff742771840"
          method="post"
          id="wf-form-Demo-Request-Modal"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "form-field-wrapper")}
            tag="div"
          >
            <_Builtin.FormTextInput
              className={_utils.cx(_styles, "form-input", "demo")}
              name="First-Name"
              maxLength={256}
              data-name="First Name"
              placeholder="First name"
              disabled={false}
              type="text"
              required={true}
              autoFocus={false}
              id="Demo-First-Name"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "form-field-wrapper")}
            tag="div"
          >
            <_Builtin.FormTextInput
              className={_utils.cx(_styles, "form-input", "demo")}
              name="Last-Name"
              maxLength={256}
              data-name="Last Name"
              placeholder="Last name"
              disabled={false}
              type="text"
              required={true}
              autoFocus={false}
              id="Demo-Last-Name"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "form-field-wrapper")}
            tag="div"
          >
            <_Builtin.FormTextInput
              className={_utils.cx(_styles, "form-input", "demo")}
              name="Email"
              maxLength={256}
              data-name="Email"
              placeholder="Email"
              disabled={false}
              type="email"
              required={true}
              autoFocus={false}
              id="Demo-Email"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "form-field-wrapper")}
            tag="div"
          >
            <_Builtin.FormTextInput
              className={_utils.cx(_styles, "form-input", "demo")}
              name="Company-Name"
              maxLength={256}
              data-name="Company Name"
              placeholder="Company name"
              disabled={false}
              type="text"
              required={false}
              autoFocus={false}
              id="Demo-Company-Name"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "form-field-wrapper")}
            tag="div"
          >
            <_Builtin.FormTextInput
              className={_utils.cx(_styles, "form-input", "demo")}
              name="Job-Title"
              maxLength={256}
              data-name="Job Title"
              placeholder="Job title"
              disabled={false}
              type="text"
              required={false}
              autoFocus={false}
              id="Demo-Job-Title"
            />
          </_Builtin.Block>
          <_Builtin.FormButton
            className={_utils.cx(_styles, "button", "is-alternate")}
            id={_utils.cx(
              _styles,
              "w-node-_644eb17d-d272-4b9d-353a-8f69420f2f17-420f2f06"
            )}
            type="submit"
            value="Submit"
            data-wait="Please wait..."
          />
        </_Builtin.FormForm>
        <_Builtin.FormSuccessMessage
          className={_utils.cx(_styles, "success-message")}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "success-text")}
            tag="div"
          >
            {"Thank you! Your submission has been received!"}
          </_Builtin.Block>
        </_Builtin.FormSuccessMessage>
        <_Builtin.FormErrorMessage
          className={_utils.cx(_styles, "error-message")}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "error-text")}
            tag="div"
          >
            {"Oops! Something went wrong while submitting the form."}
          </_Builtin.Block>
        </_Builtin.FormErrorMessage>
      </_Builtin.FormWrapper>
    </_Component>
  );
}
