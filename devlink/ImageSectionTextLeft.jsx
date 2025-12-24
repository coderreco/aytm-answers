"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImageSectionTextLeft.module.css";

export function ImageSectionTextLeft({
  as: _Component = _Builtin.Block,
  mainHeadingText = "Main Heading",
  mainContent = "",
  buttonText = "Button Text",

  buttonLink = {
    href: "#",
  },

  image = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/62c5cd2a77ff168d0a4bd03f_viewpoint-1.webp",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_text-left-basic")}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "page-padding")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-vertical", "padding-huge")}
            tag="div"
          >
            <_Builtin.Grid
              className={_utils.cx(
                _styles,
                "layout_component",
                "flip-content-order"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "layout_content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-bottom",
                    "margin-small"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "heading-secondary")}
                    tag="h2"
                  >
                    {mainHeadingText}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.RichText
                  className={_utils.cx(_styles, "text-rich-text")}
                  tag="div"
                  slot=""
                >
                  {mainContent}
                </_Builtin.RichText>
                <_Builtin.Block
                  className={_utils.cx(_styles, "margin-top", "margin-small")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "button-row")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "button-wrapper")}
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
              <_Builtin.Block
                className={_utils.cx(_styles, "layout_image-wrapper")}
                tag="div"
              >
                <_Builtin.Image
                  loading="eager"
                  width="auto"
                  height="auto"
                  alt=""
                  src={image}
                />
              </_Builtin.Block>
            </_Builtin.Grid>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
