"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./HeadingW3ColumnCta.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-39":{"id":"e-39","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-40"}},"mediaQueries":["main","medium"],"target":{"selector":".grid_item","originalId":"1d43858a-d4da-e7e5-d690-2f631384a983","appliesTo":"CLASS"},"targets":[{"selector":".grid_item","originalId":"1d43858a-d4da-e7e5-d690-2f631384a983","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653404875829},"e-40":{"id":"e-40","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-39"}},"mediaQueries":["main","medium"],"target":{"selector":".grid_item","originalId":"1d43858a-d4da-e7e5-d690-2f631384a983","appliesTo":"CLASS"},"targets":[{"selector":".grid_item","originalId":"1d43858a-d4da-e7e5-d690-2f631384a983","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653404875830}},"actionLists":{"a-10":{"id":"a-10","title":"Grid Image Hover","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".display-tile-image","selectorGuids":["2552d760-e317-2fa6-111e-80a67c47001b"]},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-10-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".display-tile-image","selectorGuids":["2552d760-e317-2fa6-111e-80a67c47001b"]},"value":0.75,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1653404888680},"a-11":{"id":"a-11","title":"Grid Image Hover_Out","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".display-tile-image","selectorGuids":["2552d760-e317-2fa6-111e-80a67c47001b"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-11-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".display-tile-image","selectorGuids":["2552d760-e317-2fa6-111e-80a67c47001b"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1653404888680}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HeadingW3ColumnCta({
  as: _Component = _Builtin.Block,
  mainHeadingText = "Main Heading",
  secondaryHeadingText = "This is the secondary heading area",
  paragraphText = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  buttonText = "Button Text",

  buttonLink = {
    href: "#",
  },

  titleOne = "Title One",
  titleTwo = "Title Two",
  titleThree = "Title Three",
  imageOne = "",
  imageTwo = "",
  imageThree = "",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "section-header-main")}
        tag="header"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "page-padding")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-medium")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "padding-vertical",
                "padding-large"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-align-center")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-bottom",
                    "margin-xsmall"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading tag="h2">
                    {mainHeadingText}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-bottom",
                    "margin-small"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "subheading-h3")}
                    tag="h3"
                  >
                    {secondaryHeadingText}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "margin-bottom")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "container-small")}
                    tag="div"
                  >
                    <_Builtin.Paragraph>{paragraphText}</_Builtin.Paragraph>
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
                          options={buttonLink}
                        >
                          {buttonText}
                        </_Builtin.Link>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "section_grid-layout")}
        tag="section"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "page-padding")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-large")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "padding-bottom", "padding-huge")}
              tag="div"
            >
              <_Builtin.Grid
                className={_utils.cx(_styles, "grid-layout_component")}
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
                      "margin-medium"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "grid-layout_image-wrapper"
                      )}
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
                      "margin-medium"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "grid-layout_image-wrapper"
                      )}
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
                      "margin-medium"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "grid-layout_image-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "display-tile-image")}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={imageThree}
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
                        {titleThree}
                      </_Builtin.Heading>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
