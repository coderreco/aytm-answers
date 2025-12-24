"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./IconAboveHeadline.module.css";

export function IconAboveHeadline({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "page-padding")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "container-medium")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "padding-bottom", "padding-xhuge")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-align-center")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "margin-bottom", "margin-small")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-2")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/65fdcc990dcddd1a9bb7db87_Asset%2018.svg"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "margin-bottom", "margin-xsmall")}
              tag="div"
            >
              <_Builtin.Heading tag="h2">
                {"Become a certified researcher"}
              </_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "margin-bottom", "margin-small")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "subheading-h3")}
                tag="h3"
              >
                {"Conquer any challenge in the field"}
              </_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "margin-bottom")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "container-medium")}
                tag="div"
              >
                <_Builtin.Paragraph>
                  {
                    "When you take these courses, not only will you be more confident in your MaxDiff capabilities, but you’ll feel more confident in running them on your own within aytm. You’ll also be able to attach a new certification badge directly to your LinkedIn profile to show that you’re an expert in this research test method – in or out of aytm."
                  }
                </_Builtin.Paragraph>
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
                      options={{
                        href: "https://academy.aytm.com/path/maxdiff-advanced-certification",
                      }}
                    >
                      <_Builtin.Strong>
                        {"GET YOUR CERTIFICATION"}
                      </_Builtin.Strong>
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
