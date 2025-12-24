"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./DemoSuccessCtaGrid.module.css";

export function DemoSuccessCtaGrid({
  as: _Component = _Builtin.Block,
  heading = "Looking to learn more?",
  subheading = "We have so much to share with you",
  tile1Heading = "Dig into some helpful resources",
  tile1Cta = "",

  tile1Link = {
    href: "#",
  },

  tile1Background = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/65985b7daf5bd3eb301d1796_Clouds.webp",
  tile2Heading = "See what our clients have to say",
  tile2Cta = "",

  tile2Link = {
    href: "#",
  },

  tile2Background = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/65985b7daf5bd3eb301d1796_Clouds.webp",
  tile3Heading = "Take a peek at some success stories",

  tile3Link = {
    href: "#",
  },

  tile3Cta = "REVIEW OUR CASE STUDIES",
  tile3Background = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/65985b7daf5bd3eb301d1796_Clouds.webp",
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
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-bottom",
                    "margin-xsmall"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "heading-secondary")}
                    tag="h2"
                  >
                    {heading}
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
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "subheading-h3")}
                    tag="h3"
                  >
                    {subheading}
                  </_Builtin.Heading>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Grid
              className={_utils.cx(
                _styles,
                "grid-layout_component",
                "_4column",
                "industry",
                "center"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "demo-success-roadmap-tile")}
                id={_utils.cx(
                  _styles,
                  "w-node-_73ebba35-5683-cd5e-f956-5c57804df756-804df749"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "bg_wrapper")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "roadmap-bg-img")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src={tile1Background}
                  />
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "demo-success_bg-overlay",
                      "resources"
                    )}
                    tag="div"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "demo-success_tile-content")}
                  tag="div"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "demo-success_tile-title")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_73ebba35-5683-cd5e-f956-5c57804df75b-804df749"
                    )}
                  >
                    {tile1Heading}
                  </_Builtin.Paragraph>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "button-wrapper")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_73ebba35-5683-cd5e-f956-5c57804df75d-804df749"
                    )}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "button", "is-alternate")}
                      button={true}
                      block=""
                      options={tile1Link}
                    >
                      {tile1Cta}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "demo-success-roadmap-tile")}
                id={_utils.cx(
                  _styles,
                  "w-node-_73ebba35-5683-cd5e-f956-5c57804df760-804df749"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "bg_wrapper")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "roadmap-bg-img")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src={tile2Background}
                  />
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "demo-success_bg-overlay",
                      "testimonials"
                    )}
                    tag="div"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "demo-success_tile-content")}
                  tag="div"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "demo-success_tile-title")}
                  >
                    {tile2Heading}
                  </_Builtin.Paragraph>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "button-wrapper")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_73ebba35-5683-cd5e-f956-5c57804df767-804df749"
                    )}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "button", "is-alternate")}
                      button={true}
                      block=""
                      options={tile2Link}
                    >
                      {tile2Cta}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "demo-success-roadmap-tile")}
                id={_utils.cx(
                  _styles,
                  "w-node-_73ebba35-5683-cd5e-f956-5c57804df76a-804df749"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "bg_wrapper")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "roadmap-bg-img")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src={tile3Background}
                  />
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "demo-success_bg-overlay",
                      "case-studies"
                    )}
                    tag="div"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "demo-success_tile-content")}
                  tag="div"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "demo-success_tile-title")}
                  >
                    {tile3Heading}
                  </_Builtin.Paragraph>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "button-wrapper")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_73ebba35-5683-cd5e-f956-5c57804df771-804df749"
                    )}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "button", "is-alternate")}
                      button={true}
                      block=""
                      options={tile3Link}
                    >
                      {tile3Cta}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Grid>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
