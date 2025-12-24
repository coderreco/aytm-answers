"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./2ColumnCtaDualLinks.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-39":{"id":"e-39","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-40"}},"mediaQueries":["main","medium"],"target":{"selector":".grid_item","originalId":"1d43858a-d4da-e7e5-d690-2f631384a983","appliesTo":"CLASS"},"targets":[{"selector":".grid_item","originalId":"1d43858a-d4da-e7e5-d690-2f631384a983","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653404875829},"e-40":{"id":"e-40","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-39"}},"mediaQueries":["main","medium"],"target":{"selector":".grid_item","originalId":"1d43858a-d4da-e7e5-d690-2f631384a983","appliesTo":"CLASS"},"targets":[{"selector":".grid_item","originalId":"1d43858a-d4da-e7e5-d690-2f631384a983","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653404875830}},"actionLists":{"a-10":{"id":"a-10","title":"Grid Image Hover","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".display-tile-image","selectorGuids":["2552d760-e317-2fa6-111e-80a67c47001b"]},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-10-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".display-tile-image","selectorGuids":["2552d760-e317-2fa6-111e-80a67c47001b"]},"value":0.75,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1653404888680},"a-11":{"id":"a-11","title":"Grid Image Hover_Out","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".display-tile-image","selectorGuids":["2552d760-e317-2fa6-111e-80a67c47001b"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-11-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".display-tile-image","selectorGuids":["2552d760-e317-2fa6-111e-80a67c47001b"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1653404888680}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function __2ColumnCtaDualLinks({
  as: _Component = _Builtin.Block,
  titleOne = "Title One",
  imageOne = "",
  textOne = "Let us help you navigate the world of consumer insights. ",
  buttonTextOne = "Button one",

  buttonLinkOne = {
    href: "#",
  },

  titleTwo = "Title Two",
  imageTwo = "",
  textTwo = "Let us help you navigate the world of consumer insights. ",
  buttonTextTwo = "Button Two",

  buttonLinkTwo = {
    href: "#",
  },
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_grid-layout")}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "page-padding")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-vertical", "padding-xlarge")}
            tag="div"
          >
            <_Builtin.Grid
              className={_utils.cx(_styles, "grid_two-column-component")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "grid_item")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-bottom",
                    "margin-small"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "heading-small",
                      "text-style-serif",
                      "text-style-lower",
                      "text-weight-normal"
                    )}
                    tag="h3"
                  >
                    {titleOne}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-bottom",
                    "margin-medium"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "grid-layout_image-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "display-tile-image")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src={imageOne}
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-bottom",
                    "margin-small"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "padding-horizontal",
                      "padding-small"
                    )}
                    tag="div"
                  >
                    <_Builtin.Paragraph>{textOne}</_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "margin-top", "margin-tiny")}
                  tag="div"
                >
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
                        options={buttonLinkOne}
                      >
                        {buttonTextOne}
                      </_Builtin.Link>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "grid_item")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-bottom",
                    "margin-small"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "heading-small",
                      "text-style-serif",
                      "text-style-lower",
                      "text-weight-normal"
                    )}
                    tag="h3"
                  >
                    {titleTwo}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-bottom",
                    "margin-medium"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "grid-layout_image-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "display-tile-image")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src={imageTwo}
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-bottom",
                    "margin-small"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "padding-horizontal",
                      "padding-small"
                    )}
                    tag="div"
                  >
                    <_Builtin.Paragraph>{textTwo}</_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "margin-top", "margin-tiny")}
                  tag="div"
                >
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
                        options={buttonLinkTwo}
                      >
                        {buttonTextTwo}
                      </_Builtin.Link>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Grid>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
