"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ResourceBgImage.module.css";

export function ResourceBgImage({
  as: _Component = _Builtin.Image,
  image = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/65f1de3bbc03d118672d358c_further-reading-c.webp",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "resource-tile_bg-image")}
      width="auto"
      height="auto"
      loading="lazy"
      alt=""
      src={image}
    />
  );
}
