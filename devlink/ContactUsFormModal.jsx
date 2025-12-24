"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ContactUsFormModal.module.css";

export function ContactUsFormModal({
  as: _Component = _Builtin.Block,
  formHeading = "Contact us",
  subHeading = "Call us anytime Monday through Friday from 9am–9pm EST or drop us an email and we'll get back to you asap.",
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
          <_Builtin.Block
            className={_utils.cx(_styles, "margin-top", "margin-xxsmall")}
            tag="div"
          >
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "text-color-white")}
            >
              {subHeading}
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.FormWrapper
        className={_utils.cx(_styles, "contact-modal_form-block")}
      >
        <_Builtin.FormForm
          className={_utils.cx(_styles, "contact-modal_form")}
          name="wf-form-Contact-Modal-Form"
          data-name="Contact Modal Form"
          action="https://api.hsforms.com/submissions/v3/integration/submit/5412639/bb91a0cf-2d72-4e74-8a03-11b8c0463d7f"
          method="post"
          id="wf-form-Contact-Modal-Form"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "form-field-wrapper")}
            tag="div"
          >
            <_Builtin.FormTextInput
              className={_utils.cx(_styles, "hs-input")}
              name="First-Name"
              maxLength={256}
              data-name="First Name"
              placeholder="First name"
              disabled={false}
              type="text"
              required={true}
              autoFocus={false}
              id="Contact-First-Name"
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
              id="Contact-Last-Name"
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
              id="Contact-Email"
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
              id="Contact-Company-Name"
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
              id="Contact-Job-Title"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "form-field-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "contact_contact-list")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "contact_item")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "contact_item", "link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "mailto:support@aytm.com?subject=Contact%20Request%20%7C%20Aytm%20Website",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "contact5_icon-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "icon-1x1-xsmall")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt="Envelope icon"
                      src="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/62d09f3b588aa2067dbcfab1_mail.svg"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block tag="div">
                    {"support@aytm.com"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "contact_item")}
                id={_utils.cx(
                  _styles,
                  "w-node-_60dc0a04-0610-86f4-07f7-ebc4949f5124-949f5108"
                )}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "contact_item", "link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "tel:+14153648601",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "contact5_icon-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "icon-1x1-xsmall")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt="Mobile phone icon"
                      src="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/62d09fec2a71cc92ea96e487_phone.svg"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block tag="div">{"+1 415.364.8601"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.FormButton
            className={_utils.cx(_styles, "button", "is-alternate")}
            id={_utils.cx(
              _styles,
              "w-node-_60dc0a04-0610-86f4-07f7-ebc4949f512a-949f5108"
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
