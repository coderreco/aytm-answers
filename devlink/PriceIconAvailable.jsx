"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PriceIconAvailable.module.css";

export function PriceIconAvailable({
  as: _Component = _Builtin.Block,
  priceIconImage = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/63641747650a2e5fc881e150_Available.svg",
}) {
  return (
    <_Component className={_utils.cx(_styles, "price-icon_wrapper")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "price-icon")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={priceIconImage}
      />
    </_Component>
  );
}
