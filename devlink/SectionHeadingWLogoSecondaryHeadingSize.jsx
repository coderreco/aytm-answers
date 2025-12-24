"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SectionHeadingWLogoSecondaryHeadingSize.module.css";

export function SectionHeadingWLogoSecondaryHeadingSize({
  as: _Component = _Builtin.Block,
  icon = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/62c5cd2a77ff1614e44bd069_Group%2036868.svg",
  mainHeadingText = "Main Heading",
  secondaryHeadingText = "This is the secondary heading area",
  mainContent = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  buttonText = "Button Text",
  buttonLink,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-header-main")}
      tag="header"
    >
      <_Builtin.Block className={_utils.cx(_styles, "page-padding")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "container-medium")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-vertical", "padding-xhuge")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-align-center")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom", "margin-small")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "icon-large")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src={icon}
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom", "margin-xsmall")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading-secondary")}
                  tag="h2"
                >
                  {mainHeadingText}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom", "margin-small")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "subheading-h3")}
                  tag="h3"
                >
                  {secondaryHeadingText}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "container-medium")}
                  tag="div"
                >
                  <_Builtin.Paragraph>{mainContent}</_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-top", "margin-small")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "button-row",
                    "is-button-row-center"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "button-wrapper",
                      "is-button-wrapper-center"
                    )}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "button")}
                      button={true}
                      block=""
                      options={buttonLink}
                    >
                      {buttonText}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
