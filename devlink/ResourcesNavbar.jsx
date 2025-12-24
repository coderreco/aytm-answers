"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ResourcesNavbar.module.css";

export function ResourcesNavbar({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "resources-nav")} tag="nav">
      <_Builtin.Block className={_utils.cx(_styles, "resources-nav")} tag="div">
        <_Builtin.Link
          className={_utils.cx(_styles, "resources-nav_link")}
          button={false}
          dyn={{
            bind: {},
          }}
          block=""
          options={{
            href: "#",
          }}
        >
          {"The Latest"}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "resources-nav_link")}
          button={false}
          dyn={{
            bind: {},
          }}
          block=""
          options={{
            href: "#",
          }}
        >
          {"Articles"}
        </_Builtin.Link>
        <_Builtin.NotSupported _atom="DynamoWrapper" />
      </_Builtin.Block>
    </_Component>
  );
}
