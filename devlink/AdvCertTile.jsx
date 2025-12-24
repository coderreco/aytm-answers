"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AdvCertTile.module.css";

export function AdvCertTile({
  as: _Component = _Builtin.Block,
  nucleus = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/66ad10d7e2ddfcbbb3cefb75_maxdiff-nucleus.svg",
  title = "Maxdiff",
  text = "Solidify your understanding of MaxDiff. This course is one of a kind in the industry, offering a completely free, comprehensive overview of this extremely popular research test so you can hone-in on consumer preference.",

  link = {
    href: "#",
  },

  buttonText = "Upskill in Maxdiff",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "adv-cert-tile")}
      id={_utils.cx(
        _styles,
        "w-node-_5d2ca85a-f8b7-6888-8e8d-2771dd0336a4-dd0336a4"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "adv-cert-til-content")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "nucleus")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={nucleus}
        />
        <_Builtin.Block tag="div">
          <_Builtin.Paragraph
            className={_utils.cx(_styles, "adv-cert-heading")}
          >
            {title}
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "text-color-white", "text-size-small")}
        >
          {text}
        </_Builtin.Paragraph>
        <_Builtin.Block className={_utils.cx(_styles, "margin-top")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "button-row", "is-button-row-center")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "button", "is-alternate")}
              button={true}
              block=""
              options={link}
            >
              {buttonText}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
