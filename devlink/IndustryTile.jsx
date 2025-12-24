"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./IndustryTile.module.css";

export function IndustryTile({
  as: _Component = _Builtin.Block,
  text = (
    <>
      {"Xpert: Concept "}
      <br />
      {"testing (images)"}
    </>
  ),

  link = {
    href: "#",
  },

  linkText = "Read more",
  bgImage = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/65985745cf9157f003fe3d34_lighttrails%20(1).webp",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "cert-roadmap-tile")}
      id={_utils.cx(
        _styles,
        "w-node-b62bfbef-0ed7-0800-aa8b-81d0b57bec3b-b57bec3b"
      )}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "bg_wrapper")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "roadmap-bg-img")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={bgImage}
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "roadmap-bg-overlay", "industry")}
          tag="div"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "industry-tile-content")}
        tag="div"
      >
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "svg", "s64")}
          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3CclipPath%20id%3D%22clip-path%22%3E%0A%20%20%20%20%20%20%3Crect%20id%3D%22Rectangle_13671%22%20data-name%3D%22Rectangle%2013671%22%20width%3D%2238.395%22%20height%3D%2237.18%22%20fill%3D%22%23fff%22%2F%3E%0A%20%20%20%20%3C%2FclipPath%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Cg%20id%3D%22wand-icon%22%20transform%3D%22translate(-433%20-4526)%22%3E%0A%20%20%20%20%3Cg%20id%3D%22Ellipse_143%22%20data-name%3D%22Ellipse%20143%22%20transform%3D%22translate(433%204526)%22%20fill%3D%22%231c9ac4%22%20stroke%3D%22%23fff%22%20stroke-width%3D%223%22%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%2232%22%20cy%3D%2232%22%20r%3D%2232%22%20stroke%3D%22none%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%2232%22%20cy%3D%2232%22%20r%3D%2230.5%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3Cg%20id%3D%22Group_40637%22%20data-name%3D%22Group%2040637%22%20transform%3D%22translate(445.802%204537.82)%22%3E%0A%20%20%20%20%20%20%3Cg%20id%3D%22Group_40636%22%20data-name%3D%22Group%2040636%22%20transform%3D%22translate(0%200)%22%20clip-path%3D%22url(%23clip-path)%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20id%3D%22Path_8851%22%20data-name%3D%22Path%208851%22%20d%3D%22M13.149%2C7.562l4.632-1.417L19.2%2C1.512l1.417%2C4.632%2C4.632%2C1.417L20.615%2C8.979%2C19.2%2C13.611%2C17.781%2C8.979Zm20.593%2C5.52L9.976%2C36.847a1.2%2C1.2%2C0%2C0%2C1-1.663%2C0L4.654%2C33.188a1.2%2C1.2%2C0%2C0%2C1%2C0-1.663L13.876%2C22.3%2C4.654%2C13.081a1.2%2C1.2%2C0%2C0%2C1%2C0-1.663L8.313%2C7.76a1.2%2C1.2%2C0%2C0%2C1%2C1.663%2C0L19.2%2C16.982%2C28.42%2C7.76a1.2%2C1.2%2C0%2C0%2C1%2C1.663%2C0l3.659%2C3.659a1.2%2C1.2%2C0%2C0%2C1%2C0%2C1.663M14.573%2C15.7%2C9.144%2C10.273%2C7.167%2C12.25%2C12.6%2C17.678ZM31.228%2C12.25l-1.977-1.977L23.823%2C15.7%2C25.8%2C17.678ZM25.7%2C6.049l.709-2.316%2C2.316-.709-2.316-.708L25.7%2C0l-.708%2C2.316-2.316.708%2C2.316.709Zm-12.969%2C0%2C.709-2.316%2C2.316-.709-2.316-.708L12.733%2C0l-.708%2C2.316-2.316.708%2C2.316.709ZM26.194%2C23.977%2C20.872%2C29.3l7.548%2C7.548a1.2%2C1.2%2C0%2C0%2C0%2C1.663%2C0l3.659-3.659a1.2%2C1.2%2C0%2C0%2C0%2C0-1.663Zm8.893-2.593-1.012-3.308-1.013%2C3.308L29.754%2C22.4l3.308%2C1.012%2C1.013%2C3.308%2C1.012-3.308L38.4%2C22.4ZM5.333%2C23.41%2C8.642%2C22.4%2C5.333%2C21.385%2C4.321%2C18.076%2C3.308%2C21.385%2C0%2C22.4%2C3.308%2C23.41l1.013%2C3.308Z%22%20transform%3D%22translate(0%200)%22%20fill%3D%22%23fff%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"
        />
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "industry-tile_title")}
        >
          {text}
        </_Builtin.Paragraph>
        <_Builtin.Block
          className={_utils.cx(_styles, "button-wrapper")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "button", "is-alternate")}
            button={true}
            block=""
            options={link}
          >
            {linkText}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
