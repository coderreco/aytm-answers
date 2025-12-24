import * as React from "react";
import * as Types from "./types";

declare function AdvCertTile(props: {
  as?: React.ElementType;
  nucleus?: Types.Asset.Image;
  title?: React.ReactNode;
  text?: React.ReactNode;
  link?: Types.Basic.Link;
  buttonText?: React.ReactNode;
}): React.JSX.Element;
