"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./InsightsItem.module.css";

export function InsightsItem({
  as: _Component = _Builtin.Block,
  icon = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/64d55029b76fc54e0dad3142_Icon%20-%20aytm.svg",
  heading = (
    <>
      {"Crosstabs"}
      <br />
      {"Analysis"}
    </>
  ),
  copy = (
    <>
      {
        "Uncover correlations among demographic traits and other key questions in your dataset."
      }
      <br />
      <br />
      {
        "Gain a quick and accurate look into what matters. Dig deeper into promising areas, check hypotheses, and discover unexpected insights. "
      }
      <br />
      <br />
      {
        "Adjust the primary and secondary confidence levels and download raw numbers."
      }
    </>
  ),
  insightsItemVisibility = true,
}) {
  return insightsItemVisibility ? (
    <_Component
      className={_utils.cx(_styles, "insights-item")}
      id={_utils.cx(
        _styles,
        "w-node-aaa807dd-9735-30e3-c82d-d8123bd7809c-3bd7809c"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "r-1x1", "insights-icon")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "insights-image")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={icon}
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "margin-bottom", "margin-xxsmall")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "subheading-h3", "insights-heading")}
          tag="h3"
        >
          {heading}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Paragraph className={_utils.cx(_styles, "text-size-small")}>
        {copy}
      </_Builtin.Paragraph>
    </_Component>
  ) : null;
}
