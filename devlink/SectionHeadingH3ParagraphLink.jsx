"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SectionHeadingH3ParagraphLink.module.css";

export function SectionHeadingH3ParagraphLink({
  as: _Component = _Builtin.Block,
  buttonVisibility = true,
  headingText = (
    <>
      {"Now that we've gotten introductions"}
      <br />
      {"out of the way, let's dive even deeper."}
    </>
  ),
  paragraphText = "This agile transformation guide is meant to illuminate the path to building a fast, iterative insights engine that produces actionable nuggets of wisdom that can be used to make strategic decisions throughout the business.",

  guideFileLink = {
    href: "#",
  },

  buttonText = "Check out this guide",
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
                className={_utils.cx(_styles, "margin-bottom", "margin-xsmall")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "grid-subheading")}
                  tag="h3"
                >
                  {headingText}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "container-small")}
                  tag="div"
                >
                  <_Builtin.Paragraph>{paragraphText}</_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
              {buttonVisibility ? (
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
                        options={guideFileLink}
                      >
                        {buttonText}
                      </_Builtin.Link>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
