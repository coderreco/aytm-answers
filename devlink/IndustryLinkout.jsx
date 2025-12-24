"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./IndustryLinkout.module.css";

export function IndustryLinkout({
  as: _Component = _Builtin.Block,
  heading = "Satisfy your curiosity with aytm",
  paragraph = "Looking to streamline your research process? Our automated platform connects you with your consumers to deliver fast, reliable insights. We’ve made it a breeze to design, launch, and analyze your studies—and by partnering with our experts, we can help you scale your success and focus on what really matters: making informed decisions based on consumer insights.",

  link1 = {
    href: "#",
  },

  link2 = {
    href: "#",
  },

  link3 = {
    href: "#",
  },

  link4 = {
    href: "#",
  },

  linkText1 = "Find and segment your audience",
  linkText2 = "Design simple or advanced surveys",
  linkText3 = "Collect and organize your findings",
  linkText4 = "Leverage our automated solutions",
}) {
  return (
    <_Component className={_utils.cx(_styles, "section-linkout")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "page-padding")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "padding-vertical", "padding-huge")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-large")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "linkout-grid")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "linkout-lockup-wrapper")}
                id={_utils.cx(
                  _styles,
                  "w-node-_9ba6ea11-5309-cef9-78cd-ab302795bef9-2795bef4"
                )}
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
                    className={_utils.cx(
                      _styles,
                      "heading-secondary",
                      "text-color-white",
                      "industry"
                    )}
                    tag="h2"
                  >
                    {heading}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Paragraph
                  className={_utils.cx(
                    _styles,
                    "text-color-white",
                    "text-size-small"
                  )}
                >
                  {paragraph}
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "linkout-bg")}
                id={_utils.cx(
                  _styles,
                  "w-node-_9ba6ea11-5309-cef9-78cd-ab302795beff-2795bef4"
                )}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "linkout-img")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/64768acec8182ad17f39a9d1_linkout-bg.webp"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "image-overlay-layer",
                    "coral_deep-ocean",
                    "filter"
                  )}
                  tag="div"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "linkout-links-wrapper")}
                id={_utils.cx(
                  _styles,
                  "w-node-_9ba6ea11-5309-cef9-78cd-ab302795bf02-2795bef4"
                )}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "linkout-link")}
                  button={false}
                  block="inline"
                  options={link1}
                >
                  <_Builtin.Block tag="div">{linkText1}</_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "linkout-arrow-right")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ic%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M9.29%2015.88L13.17%2012L9.29%208.12a.996.996%200%201%201%201.41-1.41l4.59%204.59c.39.39.39%201.02%200%201.41L10.7%2017.3a.996.996%200%200%201-1.41%200c-.38-.39-.39-1.03%200-1.42z%22%2F%3E%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "linkout-link")}
                  button={false}
                  block="inline"
                  options={link2}
                >
                  <_Builtin.Block tag="div">{linkText2}</_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "linkout-arrow-right")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ic%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M9.29%2015.88L13.17%2012L9.29%208.12a.996.996%200%201%201%201.41-1.41l4.59%204.59c.39.39.39%201.02%200%201.41L10.7%2017.3a.996.996%200%200%201-1.41%200c-.38-.39-.39-1.03%200-1.42z%22%2F%3E%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "linkout-link")}
                  button={false}
                  block="inline"
                  options={link3}
                >
                  <_Builtin.Block tag="div">{linkText3}</_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "linkout-arrow-right")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ic%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M9.29%2015.88L13.17%2012L9.29%208.12a.996.996%200%201%201%201.41-1.41l4.59%204.59c.39.39.39%201.02%200%201.41L10.7%2017.3a.996.996%200%200%201-1.41%200c-.38-.39-.39-1.03%200-1.42z%22%2F%3E%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "linkout-link")}
                  button={false}
                  block="inline"
                  options={link4}
                >
                  <_Builtin.Block tag="div">{linkText4}</_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "linkout-arrow-right")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ic%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M9.29%2015.88L13.17%2012L9.29%208.12a.996.996%200%201%201%201.41-1.41l4.59%204.59c.39.39.39%201.02%200%201.41L10.7%2017.3a.996.996%200%200%201-1.41%200c-.38-.39-.39-1.03%200-1.42z%22%2F%3E%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
