"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { RequestDemoFormModal } from "./RequestDemoFormModal";
import * as _utils from "./utils";
import _styles from "./DemoPopupBorderedButton.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-200":{"id":"e-200","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-201"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6482131bb3b1bac3037034b7|d19cc8eb-9cf4-9a29-62f9-d1c27f9cf8e8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"selector":".close-button","originalId":"6482131bb3b1bac3037034b7|17810b7b-63e0-967c-6e8e-95df50923e6b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1656113973572},"e-202":{"id":"e-202","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-203"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6482131bb3b1bac3037034b7|d19cc8eb-9cf4-9a29-62f9-d1c27f9cf8eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"selector":".background-overlay","originalId":"6482131bb3b1bac3037034b7|17810b7b-63e0-967c-6e8e-95df50923e6e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1656113973572},"e-292":{"id":"e-292","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-293"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b5026ac-4f16-c68b-3bab-ac353de265c7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b5026ac-4f16-c68b-3bab-ac353de265c7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1662498802022},"e-294":{"id":"e-294","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-68","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-295"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b5026ac-4f16-c68b-3bab-ac353de265cc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b5026ac-4f16-c68b-3bab-ac353de265cc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1662498802022},"e-296":{"id":"e-296","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-68","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-297"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b5026ac-4f16-c68b-3bab-ac353de265cf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b5026ac-4f16-c68b-3bab-ac353de265cf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1662498802022}},"actionLists":{"a-40":{"id":"a-40","title":"Close Contact Modal[White]","actionItemGroups":[{"actionItems":[{"id":"a-40-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outCubic","duration":500,"target":{"useEventTarget":"PARENT","id":"54ea5e2d-bb71-5f31-26f4-3655f285bae6"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-40-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","id":"54ea5e2d-bb71-5f31-26f4-3655f285bae6"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1656113730063},"a-67":{"id":"a-67","title":"Open Demo Modal[Bordered]","actionItemGroups":[{"actionItems":[{"id":"a-67-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3b5026ac-4f16-c68b-3bab-ac353de265ca"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-67-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b5026ac-4f16-c68b-3bab-ac353de265ca"},"value":"flex"}}]},{"actionItems":[{"id":"a-67-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inCubic","duration":500,"target":{"id":"3b5026ac-4f16-c68b-3bab-ac353de265ca"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1656113730063},"a-68":{"id":"a-68","title":"Close Demo Modal[Border]","actionItemGroups":[{"actionItems":[{"id":"a-68-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outCubic","duration":500,"target":{"useEventTarget":"PARENT","id":"3b5026ac-4f16-c68b-3bab-ac353de265ca"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-68-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","id":"3b5026ac-4f16-c68b-3bab-ac353de265ca"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1656113730063}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DemoPopupBorderedButton({
  as: _Component = _Builtin.Block,
  formHeading = "Request a demo",
  buttonText = "Schedule A Demo",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

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
        className={_utils.cx(_styles, "button-secondary")}
        data-w-id="3b5026ac-4f16-c68b-3bab-ac353de265c7"
        button={true}
        block=""
        options={{
          href: "#",
        }}
      >
        {buttonText}
      </_Builtin.Link>
      <_Builtin.Block
        className={_utils.cx(_styles, "section-contact-modal")}
        tag="section"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "contact-modal_component")}
          data-w-id="3b5026ac-4f16-c68b-3bab-ac353de265ca"
          tag="div"
        >
          <RequestDemoFormModal formHeading={formHeading} />
          <_Builtin.Link
            className={_utils.cx(_styles, "close-button")}
            data-w-id="3b5026ac-4f16-c68b-3bab-ac353de265cc"
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "hide-mobile-landscape")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/6299b8b0e1db16aa7f896614/6299b8b0e1db168227896666_icon_close-modal-white.svg"
            />
            <_Builtin.Image
              className={_utils.cx(_styles, "show-mobile-landscape")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/6299b8b0e1db16aa7f896614/6299b8b0e1db1660c5896661_icon_close-modal.svg"
            />
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(_styles, "background-overlay")}
            data-w-id="3b5026ac-4f16-c68b-3bab-ac353de265cf"
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
