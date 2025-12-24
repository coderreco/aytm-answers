"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NavbarDropdownLink.module.css";

export function NavbarDropdownLink({
  as: _Component = _Builtin.DropdownLink,

  navbarDropdownLinkLink = {
    href: "/solutions-center",
  },

  navbarDropdownLinkText = "ProductDevelopment",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "navbar_dropdown-link")}
      options={navbarDropdownLinkLink}
    >
      {navbarDropdownLinkText}
    </_Component>
  );
}
