import * as React from "react";
import * as Types from "./types";

declare function IndustryTile(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  link?: Types.Basic.Link;
  linkText?: React.ReactNode;
  bgImage?: Types.Asset.Image;
}): React.JSX.Element;
