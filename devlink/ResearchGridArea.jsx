"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ResearchGridArea.module.css";

export function ResearchGridArea({
  as: _Component = _Builtin.Block,
  headingTitle = "Let aytm empower your product development",
  paragraphText = "We understand that the product lifecycle is intrinsically tied to the consumer, and we specialize in helping bring their voice into your decision-making process. So whether you’re prioritizing features and claims, optimizing price, or examining the influence of your package design on your audience, we can empower you to find answers that advance product development.",
  titleTopLeft = "Drive precision",
  textTopLeft = "Quickly test, iterate, and evolve your product ideas by connecting with consumer preferences.",
  titleTopRight = "Drive precision",
  textTopRight = "Quickly test, iterate, and evolve your product ideas by connecting with consumer preferences.",
  titleBottomLeft = "Drive precision",
  textBottomLeft = "Quickly test, iterate, and evolve your product ideas by connecting with consumer preferences.",
  titleBottomRight = "Drive precision",
  textBottomRight = "Quickly test, iterate, and evolve your product ideas by connecting with consumer preferences.",
  leftButtonText = "Learn more",

  leftButtonLink = {
    href: "/platform/survey-authoring-tool#question-types",
  },

  leftButtonVisibility = true,
  rightButtonVisibility = true,
  rightButtonText = "Contact us",

  rightButtonLink = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "grid-section")}
      id={_utils.cx(
        _styles,
        "w-node-_76332893-ab0f-6a5f-192d-2b296fc252b2-6fc252b2"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "padding-vertical", "padding-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-large")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "margin-bottom", "margin-medium")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-align-center")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "flex-center")}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "heading-secondary")}
                    tag="h2"
                  >
                    {headingTitle}
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-top",
                      "margin-medium"
                    )}
                    tag="div"
                  >
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "max-width-75")}
                    >
                      {paragraphText}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "research-grid-container")}
              tag="div"
            >
              <_Builtin.Grid
                className={_utils.cx(_styles, "research-grid-child")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "research-grid-content")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_76332893-ab0f-6a5f-192d-2b296fc252c0-6fc252b2"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-xsmall"
                    )}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "grid-subheading",
                        "text-color-white"
                      )}
                      tag="h3"
                    >
                      {titleTopLeft}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "margin-bottom")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "padding-horizontal",
                        "padding-xxlarge"
                      )}
                      tag="div"
                    >
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-color-white",
                          "text-size-small"
                        )}
                      >
                        {textTopLeft}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Grid>
              <_Builtin.Grid
                className={_utils.cx(
                  _styles,
                  "research-grid-child",
                  "second-child"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "research-grid-content")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_76332893-ab0f-6a5f-192d-2b296fc252c9-6fc252b2"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-xsmall"
                    )}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "grid-subheading",
                        "text-color-white"
                      )}
                      tag="h3"
                    >
                      {titleTopRight}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "margin-bottom")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "padding-horizontal",
                        "padding-xxlarge"
                      )}
                      tag="div"
                    >
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-color-white",
                          "text-size-small"
                        )}
                      >
                        {textTopRight}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Grid>
              <_Builtin.Grid
                className={_utils.cx(
                  _styles,
                  "research-grid-child",
                  "third-child"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "research-grid-content")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_76332893-ab0f-6a5f-192d-2b296fc252d2-6fc252b2"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-xsmall"
                    )}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "grid-subheading",
                        "text-color-white"
                      )}
                      tag="h3"
                    >
                      {titleBottomLeft}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "margin-bottom")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "padding-horizontal",
                        "padding-xxlarge"
                      )}
                      tag="div"
                    >
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-color-white",
                          "text-size-small"
                        )}
                      >
                        {textBottomLeft}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Grid>
              <_Builtin.Grid
                className={_utils.cx(
                  _styles,
                  "research-grid-child",
                  "fourth-child"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "research-grid-content")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_76332893-ab0f-6a5f-192d-2b296fc252db-6fc252b2"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-xsmall"
                    )}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "grid-subheading",
                        "text-color-white"
                      )}
                      tag="h3"
                    >
                      {titleBottomRight}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "margin-bottom")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "padding-horizontal",
                        "padding-xxlarge"
                      )}
                      tag="div"
                    >
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-color-white",
                          "text-size-small"
                        )}
                      >
                        {textBottomRight}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "margin-top", "margin-large")}
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
                  className={_utils.cx(_styles, "button-wrapper")}
                  tag="div"
                >
                  {rightButtonVisibility ? (
                    <_Builtin.Link
                      className={_utils.cx(_styles, "button")}
                      button={true}
                      block=""
                      options={rightButtonLink}
                    >
                      {rightButtonText}
                    </_Builtin.Link>
                  ) : null}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
