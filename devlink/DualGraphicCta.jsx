"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./DualGraphicCta.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-397":{"id":"e-397","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-100","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-398"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"80030a9e-d421-933e-cd6b-70a792b7b9de","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"80030a9e-d421-933e-cd6b-70a792b7b9de","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708026215400},"e-398":{"id":"e-398","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-397"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"80030a9e-d421-933e-cd6b-70a792b7b9de","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"80030a9e-d421-933e-cd6b-70a792b7b9de","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708026215402},"e-456":{"id":"e-456","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-106","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-457"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f48b61357fed6f2f5a5ec6|bf7b7f0d-a8ca-5d60-dd89-3cef4c58d14c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f48b61357fed6f2f5a5ec6|bf7b7f0d-a8ca-5d60-dd89-3cef4c58d14c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1739142913729},"e-457":{"id":"e-457","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-107","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-456"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f48b61357fed6f2f5a5ec6|bf7b7f0d-a8ca-5d60-dd89-3cef4c58d14c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f48b61357fed6f2f5a5ec6|bf7b7f0d-a8ca-5d60-dd89-3cef4c58d14c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1739142913729},"e-458":{"id":"e-458","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-108","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65cd4b8fa94416bc02bc273a|a1a5a302-4eab-e7fd-f4c5-732f7fb2c5c2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65cd4b8fa94416bc02bc273a|a1a5a302-4eab-e7fd-f4c5-732f7fb2c5c2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1739143472097},"e-459":{"id":"e-459","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-109","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-458"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65cd4b8fa94416bc02bc273a|a1a5a302-4eab-e7fd-f4c5-732f7fb2c5c2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65cd4b8fa94416bc02bc273a|a1a5a302-4eab-e7fd-f4c5-732f7fb2c5c2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1739143472097}},"actionLists":{"a-100":{"id":"a-100","title":"Resource Tile Hover-in","actionItemGroups":[{"actionItems":[{"id":"a-100-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".background-image-wrapper","selectorGuids":["934e45d2-d86a-7428-b77b-245af4ad5e4b"]},"xValue":1.1,"yValue":1.1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1708026227322},"a-101":{"id":"a-101","title":"Resource Tile Hover-out","actionItemGroups":[{"actionItems":[{"id":"a-101-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".background-image-wrapper","selectorGuids":["934e45d2-d86a-7428-b77b-245af4ad5e4b"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1708026227322},"a-106":{"id":"a-106","title":"Resource Tile Hover-in 2","actionItemGroups":[{"actionItems":[{"id":"a-106-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".background-image-wrapper","selectorGuids":["934e45d2-d86a-7428-b77b-245af4ad5e4b"]},"xValue":1.1,"yValue":1.1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1708026227322},"a-107":{"id":"a-107","title":"Resource Tile Hover-out 2","actionItemGroups":[{"actionItems":[{"id":"a-107-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".background-image-wrapper","selectorGuids":["934e45d2-d86a-7428-b77b-245af4ad5e4b"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1708026227322},"a-108":{"id":"a-108","title":"Resource Tile Hover-in 3","actionItemGroups":[{"actionItems":[{"id":"a-108-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".background-image-wrapper","selectorGuids":["934e45d2-d86a-7428-b77b-245af4ad5e4b"]},"xValue":1.1,"yValue":1.1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1708026227322},"a-109":{"id":"a-109","title":"Resource Tile Hover-out 3","actionItemGroups":[{"actionItems":[{"id":"a-109-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".background-image-wrapper","selectorGuids":["934e45d2-d86a-7428-b77b-245af4ad5e4b"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1708026227322}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DualGraphicCta({
  as: _Component = _Builtin.Block,
  iconOne = "",
  headingOne = "Heading One",
  textContentOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  buttonTextOne = "Action",

  buttonLinkOne = {
    href: "#",
  },

  backgroundOne = "",
  iconTwo = "",
  headingTwo = "Heading Two",
  textContentTwo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  buttonTextTwo = "Action",

  buttonLinkTwo = {
    href: "#",
  },

  backgroundTwo = "",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_grid-layout")}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-bottom", "padding-huge")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "cta-grid-container")}
          tag="div"
        >
          <_Builtin.Grid
            className={_utils.cx(
              _styles,
              "grid_two-column-cta",
              "padding",
              "first-child"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "grid_item-cta", "padding-custom1")}
              id={_utils.cx(
                _styles,
                "w-node-_12e79342-6a7f-512a-976d-2f015a827082-5a82707e"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom", "margin-medium")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "grid-layout_image-wrapper")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "icon-xlarge")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src={iconOne}
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom", "margin-small")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(
                    _styles,
                    "heading-small",
                    "text-style-serif",
                    "text-style-lower",
                    "text-weight-normal",
                    "text-color-white"
                  )}
                  tag="h3"
                >
                  {headingOne}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom", "margin-small")}
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
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "text-color-white",
                      "text-size-small"
                    )}
                  >
                    {textContentOne}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
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
                    className={_utils.cx(_styles, "button", "is-alternate")}
                    button={true}
                    block=""
                    options={buttonLinkOne}
                  >
                    {buttonTextOne}
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "background-image-wrapper",
                "grid-cta-background"
              )}
              id={_utils.cx(
                _styles,
                "w-node-_12e79342-6a7f-512a-976d-2f015a827091-5a82707e"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "image-overlay-layer",
                  "aqua_royal-blue"
                )}
                tag="div"
              />
              <_Builtin.Image
                className={_utils.cx(_styles, "header_background-image")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src={backgroundOne}
              />
            </_Builtin.Block>
          </_Builtin.Grid>
          <_Builtin.Grid
            className={_utils.cx(
              _styles,
              "grid_two-column-cta",
              "padding",
              "second-child"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "grid_item-cta", "padding-custom1")}
              id={_utils.cx(
                _styles,
                "w-node-_12e79342-6a7f-512a-976d-2f015a827095-5a82707e"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom", "margin-medium")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "grid-layout_image-wrapper")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "icon-xlarge")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src={iconTwo}
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom", "margin-small")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(
                    _styles,
                    "heading-small",
                    "text-style-serif",
                    "text-style-lower",
                    "text-weight-normal",
                    "text-color-white"
                  )}
                  tag="h3"
                >
                  {headingTwo}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom", "margin-small")}
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
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "text-color-white",
                      "text-size-small"
                    )}
                  >
                    {textContentTwo}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
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
                    className={_utils.cx(_styles, "button", "is-alternate")}
                    button={true}
                    block=""
                    options={buttonLinkTwo}
                  >
                    {buttonTextTwo}
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "background-image-wrapper",
                "grid-cta-background"
              )}
              id={_utils.cx(
                _styles,
                "w-node-_12e79342-6a7f-512a-976d-2f015a8270a4-5a82707e"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "image-overlay-layer",
                  "aqua_royal-blue"
                )}
                tag="div"
              />
              <_Builtin.Image
                className={_utils.cx(_styles, "header_background-image")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src={backgroundTwo}
              />
            </_Builtin.Block>
          </_Builtin.Grid>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
