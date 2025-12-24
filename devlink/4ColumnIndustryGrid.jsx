"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./4ColumnIndustryGrid.module.css";

export function __4ColumnIndustryGrid({
  as: _Component = _Builtin.Block,
  heading = "Grow closer to your consumers",
  image1 = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/64767b884e355f0af931a157_Group%2039981.svg",
  subheading1 = "Validate your creative",
  context1 = "with ad and concept testing",
  image2 = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/64767b961236d61ad1f6c9a8_Group%2039990.svg",
  subheading2 = (
    <>
      {"UNDERSTAND "}
      <br />
      {"YOUR SHOPPERS"}
    </>
  ),
  context2 = "with consumer segmentation",
  image3 = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/6476834cd408147e13edac77_Group%2040008.svg",
  subheading3 = "SIMULATE A SHOPPING EXPERIENCE",
  context3 = "with aytm’s Shelf Test",
  image4 = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/647683593791d54676d7e43a_Group%2039947.svg",
  subheading4 = "DISCOVER PATH TO PURCHASE",
  context4 = "with consumer experienceinsights",
  buttonText = "Get started",

  ctaLink = {
    href: "/users/new",
  },

  divBlockSlot,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_grid-layout")}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "page-padding")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-vertical", "padding-xlarge")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-align-center")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom", "margin-xlarge")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading-secondary")}
                  tag="h2"
                >
                  {heading}
                </_Builtin.Heading>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Grid
              className={_utils.cx(
                _styles,
                "grid-layout_component",
                "_4column",
                "industry"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "industry_grid-item")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "industry-tile-image")}
                  loading="auto"
                  width="auto"
                  height="auto"
                  alt=""
                  src={image1}
                />
                <_Builtin.Block tag="div">
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-xxsmall"
                    )}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "subheading-h3")}
                      tag="h3"
                    >
                      {subheading1}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-small"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "padding-horizontal",
                        "padding-small"
                      )}
                      tag="div"
                    >
                      <_Builtin.Paragraph
                        className={_utils.cx(_styles, "text-size-small")}
                      >
                        {context1}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "industry_grid-item")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "industry-tile-image")}
                  loading="auto"
                  width="auto"
                  height="auto"
                  alt=""
                  src={image2}
                />
                <_Builtin.Block tag="div">
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-xxsmall"
                    )}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "subheading-h3")}
                      tag="h3"
                    >
                      {subheading2}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-small"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "padding-horizontal",
                        "padding-small"
                      )}
                      tag="div"
                    >
                      <_Builtin.Paragraph
                        className={_utils.cx(_styles, "text-size-small")}
                      >
                        {context2}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "industry_grid-item")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "industry-tile-image")}
                  loading="auto"
                  width="auto"
                  height="auto"
                  alt=""
                  src={image3}
                />
                <_Builtin.Block tag="div">
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-xxsmall"
                    )}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "subheading-h3")}
                      tag="h3"
                    >
                      {subheading3}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-small"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "padding-horizontal",
                        "padding-small"
                      )}
                      tag="div"
                    >
                      <_Builtin.Paragraph
                        className={_utils.cx(_styles, "text-size-small")}
                      >
                        {context3}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "industry_grid-item")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "industry-tile-image")}
                  loading="auto"
                  width="auto"
                  height="auto"
                  alt=""
                  src={image4}
                />
                <_Builtin.Block tag="div">
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-xxsmall"
                    )}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "subheading-h3")}
                      tag="h3"
                    >
                      {subheading4}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-small"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "padding-horizontal",
                        "padding-small"
                      )}
                      tag="div"
                    >
                      <_Builtin.Paragraph
                        className={_utils.cx(_styles, "text-size-small")}
                      >
                        {context4}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Grid>
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
                    options={ctaLink}
                  >
                    {buttonText}
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
