"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SubheaderSingleButton.module.css";

export function SubheaderSingleButton({
  as: _Component = _Builtin.Block,
  mainContent = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  buttonText = "Button Text",
  buttonLink,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-subheader")}
      tag="header"
    >
      <_Builtin.Block className={_utils.cx(_styles, "page-padding")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "container-small")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "subhead_vertical-padding")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-align-center")}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "paragraph_hero-feature")}
              >
                {mainContent}
              </_Builtin.Paragraph>
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
      <_Builtin.Image
        className={_utils.cx(_styles, "header_drop-shadow")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://uploads-ssl.webflow.com/6262215c38d17faff897e29b/62675ce072c1228cfebb2d58_Group%2038193.png"
      />
    </_Component>
  );
}
