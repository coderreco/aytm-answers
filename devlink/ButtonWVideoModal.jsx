"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ButtonWVideoModal.module.css";

export function ButtonWVideoModal({
  as: _Component = _Builtin.Block,
  videoSource = null,
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "button-wrapper",
        "is-button-wrapper-center"
      )}
      tag="div"
    >
      <_Builtin.Link
        className={_utils.cx(_styles, "button", "is-alternate")}
        button={true}
        block=""
        options={{
          href: "#",
        }}
      >
        {"Learn More"}
      </_Builtin.Link>
    </_Component>
  );
}
