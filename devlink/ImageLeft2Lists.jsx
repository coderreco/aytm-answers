"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImageLeft2Lists.module.css";

export function ImageLeft2Lists({
  as: _Component = _Builtin.Block,
  sectionRightTextBasicVisibility = true,
  image = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/62c5cd2a77ff165b644bd046_remote-3.webp",
  headingText = "Find the approach that's right for you",
  paragraphText = "What’s it like out there? We can help you pull powerful insights on the consumer landscape and the competitive landscape, so you can have a comprehensive understanding of what to expect.",
  listLeftVisibility = true,
  listLeftText = "",
  listRightVisibility = true,
  listRightText = "",
  buttonVisibility = true,

  buttonLink = {
    href: "#",
  },

  buttonText = "Button Text",
}) {
  return sectionRightTextBasicVisibility ? (
    <_Component
      className={_utils.cx(_styles, "section-right_text-basic")}
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
              className={_utils.cx(_styles, "right-basic_component")}
              tag="div"
            >
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
                    {headingText}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.RichText
                  className={_utils.cx(_styles, "text-rich-text")}
                  tag="div"
                  slot=""
                >
                  <_Builtin.Paragraph>{paragraphText}</_Builtin.Paragraph>
                </_Builtin.RichText>
                <_Builtin.Block
                  className={_utils.cx(_styles, "flex-list_wrapper")}
                  tag="div"
                >
                  {listLeftVisibility ? (
                    <_Builtin.RichText
                      className={_utils.cx(
                        _styles,
                        "text-rich-text",
                        "list-parent"
                      )}
                      tag="div"
                      slot=""
                    >
                      {listLeftText}
                    </_Builtin.RichText>
                  ) : null}
                  {listRightVisibility ? (
                    <_Builtin.RichText
                      className={_utils.cx(
                        _styles,
                        "text-rich-text",
                        "list-parent"
                      )}
                      tag="div"
                      slot=""
                    >
                      {listRightText}
                    </_Builtin.RichText>
                  ) : null}
                </_Builtin.Block>
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
                      {buttonVisibility ? (
                        <_Builtin.Link
                          className={_utils.cx(_styles, "button")}
                          button={true}
                          block=""
                          options={buttonLink}
                        >
                          {buttonText}
                        </_Builtin.Link>
                      ) : null}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Grid>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  ) : null;
}
