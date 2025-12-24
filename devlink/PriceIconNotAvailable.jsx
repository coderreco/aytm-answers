"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PriceIconNotAvailable.module.css";

export function PriceIconNotAvailable({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "price-icon_wrapper")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "price-icon")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/63641747c818cd6418f0c396_Not%20Available.svg"
      />
    </_Component>
  );
}
