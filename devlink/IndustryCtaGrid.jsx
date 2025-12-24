"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CardBasic } from "./CardBasic";
import * as _utils from "./utils";
import _styles from "./IndustryCtaGrid.module.css";

export function IndustryCtaGrid({
  as: _Component = _Builtin.Block,

  card1Link = {
    href: "#",
  },

  card1Image = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/63bf36b68ab6b43d179df663_pexels-sam-lion-5709656.webp",
  card1Heading = "Article heading",

  card2Link = {
    href: "#",
  },

  card2Image = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/63bf36b68ab6b43d179df663_pexels-sam-lion-5709656.webp",
  card2Heading = "Article heading",

  card3Link = {
    href: "#",
  },

  card3Image = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/63bf36b68ab6b43d179df663_pexels-sam-lion-5709656.webp",
  card3Heading = "Article heading",
  headingText = "This may be helpful",
}) {
  return (
    <_Component tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-top", "padding-xxhuge")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "section-header-main")}
          tag="header"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "page-padding")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "container-medium")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom", "margin-large")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-align-center")}
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
                      {headingText}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "section_grid-layout")}
          tag="section"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "page-padding")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "container-large")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "padding-bottom", "padding-huge")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "grid-layout_component")}
                  tag="div"
                >
                  <CardBasic
                    link={card1Link}
                    image={card1Image}
                    headingText={card1Heading}
                  />
                  <CardBasic
                    link={card2Link}
                    image={card2Image}
                    headingText={card2Heading}
                  />
                  <CardBasic
                    link={card3Link}
                    image={card3Image}
                    headingText={card3Heading}
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
