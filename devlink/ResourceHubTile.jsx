"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ResourceBgImage } from "./ResourceBgImage";
import * as _utils from "./utils";
import _styles from "./ResourceHubTile.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-397":{"id":"e-397","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-100","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-398"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"80030a9e-d421-933e-cd6b-70a792b7b9de","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"80030a9e-d421-933e-cd6b-70a792b7b9de","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708026215400},"e-398":{"id":"e-398","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-397"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"80030a9e-d421-933e-cd6b-70a792b7b9de","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"80030a9e-d421-933e-cd6b-70a792b7b9de","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708026215402},"e-456":{"id":"e-456","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-106","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-457"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f48b61357fed6f2f5a5ec6|bf7b7f0d-a8ca-5d60-dd89-3cef4c58d14c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f48b61357fed6f2f5a5ec6|bf7b7f0d-a8ca-5d60-dd89-3cef4c58d14c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1739142913729},"e-457":{"id":"e-457","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-107","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-456"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f48b61357fed6f2f5a5ec6|bf7b7f0d-a8ca-5d60-dd89-3cef4c58d14c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f48b61357fed6f2f5a5ec6|bf7b7f0d-a8ca-5d60-dd89-3cef4c58d14c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1739142913729},"e-458":{"id":"e-458","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-108","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65cd4b8fa94416bc02bc273a|a1a5a302-4eab-e7fd-f4c5-732f7fb2c5c2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65cd4b8fa94416bc02bc273a|a1a5a302-4eab-e7fd-f4c5-732f7fb2c5c2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1739143472097},"e-459":{"id":"e-459","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-109","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-458"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65cd4b8fa94416bc02bc273a|a1a5a302-4eab-e7fd-f4c5-732f7fb2c5c2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65cd4b8fa94416bc02bc273a|a1a5a302-4eab-e7fd-f4c5-732f7fb2c5c2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1739143472097}},"actionLists":{"a-100":{"id":"a-100","title":"Resource Tile Hover-in","actionItemGroups":[{"actionItems":[{"id":"a-100-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".background-image-wrapper","selectorGuids":["934e45d2-d86a-7428-b77b-245af4ad5e4b"]},"xValue":1.1,"yValue":1.1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1708026227322},"a-101":{"id":"a-101","title":"Resource Tile Hover-out","actionItemGroups":[{"actionItems":[{"id":"a-101-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".background-image-wrapper","selectorGuids":["934e45d2-d86a-7428-b77b-245af4ad5e4b"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1708026227322},"a-106":{"id":"a-106","title":"Resource Tile Hover-in 2","actionItemGroups":[{"actionItems":[{"id":"a-106-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".background-image-wrapper","selectorGuids":["934e45d2-d86a-7428-b77b-245af4ad5e4b"]},"xValue":1.1,"yValue":1.1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1708026227322},"a-107":{"id":"a-107","title":"Resource Tile Hover-out 2","actionItemGroups":[{"actionItems":[{"id":"a-107-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".background-image-wrapper","selectorGuids":["934e45d2-d86a-7428-b77b-245af4ad5e4b"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1708026227322},"a-108":{"id":"a-108","title":"Resource Tile Hover-in 3","actionItemGroups":[{"actionItems":[{"id":"a-108-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".background-image-wrapper","selectorGuids":["934e45d2-d86a-7428-b77b-245af4ad5e4b"]},"xValue":1.1,"yValue":1.1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1708026227322},"a-109":{"id":"a-109","title":"Resource Tile Hover-out 3","actionItemGroups":[{"actionItems":[{"id":"a-109-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".background-image-wrapper","selectorGuids":["934e45d2-d86a-7428-b77b-245af4ad5e4b"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1708026227322}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ResourceHubTile({
  as: _Component = _Builtin.Block,
  headingText = "This is a resource title heading",
  resourceTypeText = "Event",
  resourceCtaText = "Read story",

  resourceLink = {
    href: "#",
  },

  resourceBgImage = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/65bd2c0dc010e035fe7eb7bf_Parents%20of%20Teens%20Snapshot_cover.avif",
  sortingDate = "01/01/2024",
  sortingField = "Published",
  cmsFilterField = "tag",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "resource-tile")}
      data-w-id="80030a9e-d421-933e-cd6b-70a792b7b9de"
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "resources-tile_content")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "resource-tile_text")}
          tag="div"
          fs-cmsfilter-field={cmsFilterField}
        >
          {resourceTypeText}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "resources-tile_heading-wrapper")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "resource-tile-heading")}
            tag="h3"
          >
            {headingText}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "resource-tile_cta-row")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "resource-tile_text",
              "button",
              "button-secondary",
              "small"
            )}
            button={false}
            block=""
            options={resourceLink}
          >
            {resourceCtaText}
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "sorting-content-wrapper")}
          id={_utils.cx(
            _styles,
            "w-node-_34285536-a8b2-7524-b931-0ba933d3a7ca-92b7b9de"
          )}
          tag="div"
        >
          <_Builtin.Block tag="div">{sortingField}</_Builtin.Block>
          <_Builtin.Block
            tag="div"
            fs-cmssort-field="date"
            fs-cmssort-type="date"
          >
            {sortingDate}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "background-image-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "image-overlay-layer",
            "resource-tile_overlay"
          )}
          tag="div"
        />
        <ResourceBgImage image={resourceBgImage} />
      </_Builtin.Block>
    </_Component>
  );
}
