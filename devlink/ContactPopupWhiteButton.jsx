"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ContactUsFormModal } from "./ContactUsFormModal";
import * as _utils from "./utils";
import _styles from "./ContactPopupWhiteButton.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-200":{"id":"e-200","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-201"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6482131bb3b1bac3037034b7|d19cc8eb-9cf4-9a29-62f9-d1c27f9cf8e8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"selector":".close-button","originalId":"6482131bb3b1bac3037034b7|17810b7b-63e0-967c-6e8e-95df50923e6b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1656113973572},"e-202":{"id":"e-202","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-203"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6482131bb3b1bac3037034b7|d19cc8eb-9cf4-9a29-62f9-d1c27f9cf8eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"selector":".background-overlay","originalId":"6482131bb3b1bac3037034b7|17810b7b-63e0-967c-6e8e-95df50923e6e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1656113973572},"e-262":{"id":"e-262","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-263"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"54ea5e2d-bb71-5f31-26f4-3655f285bae3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"54ea5e2d-bb71-5f31-26f4-3655f285bae3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1662493637595},"e-266":{"id":"e-266","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-267"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"54ea5e2d-bb71-5f31-26f4-3655f285bae8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"54ea5e2d-bb71-5f31-26f4-3655f285bae8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1662498277995},"e-268":{"id":"e-268","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-269"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"54ea5e2d-bb71-5f31-26f4-3655f285baeb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"54ea5e2d-bb71-5f31-26f4-3655f285baeb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1662498291881},"e-359":{"id":"e-359","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-97","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-360"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6482131bb3b1bac3037033d0|d19cc8eb-9cf4-9a29-62f9-d1c27f9cf8e8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6482131bb3b1bac3037033d0|d19cc8eb-9cf4-9a29-62f9-d1c27f9cf8e8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681747220001},"e-361":{"id":"e-361","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-97","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-362"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6482131bb3b1bac3037033d0|d19cc8eb-9cf4-9a29-62f9-d1c27f9cf8eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6482131bb3b1bac3037033d0|d19cc8eb-9cf4-9a29-62f9-d1c27f9cf8eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681747220001}},"actionLists":{"a-40":{"id":"a-40","title":"Close Contact Modal[White]","actionItemGroups":[{"actionItems":[{"id":"a-40-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outCubic","duration":500,"target":{"useEventTarget":"PARENT","id":"54ea5e2d-bb71-5f31-26f4-3655f285bae6"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-40-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","id":"54ea5e2d-bb71-5f31-26f4-3655f285bae6"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1656113730063},"a-39":{"id":"a-39","title":"Open Contact Modal[White]","actionItemGroups":[{"actionItems":[{"id":"a-39-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"54ea5e2d-bb71-5f31-26f4-3655f285bae6"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-39-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"54ea5e2d-bb71-5f31-26f4-3655f285bae6"},"value":"flex"}}]},{"actionItems":[{"id":"a-39-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inCubic","duration":500,"target":{"id":"54ea5e2d-bb71-5f31-26f4-3655f285bae6"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1656113730063},"a-97":{"id":"a-97","title":"Close Contact Modal[White] 2","actionItemGroups":[{"actionItems":[{"id":"a-97-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outCubic","duration":500,"target":{"useEventTarget":"PARENT","id":"6482131bb3b1bac3037033d0|54ea5e2d-bb71-5f31-26f4-3655f285bae6"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-97-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","id":"6482131bb3b1bac3037033d0|54ea5e2d-bb71-5f31-26f4-3655f285bae6"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1656113730063}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ContactPopupWhiteButton({
  as: _Component = _Builtin.Block,
  formHeading = "Contact us",
  subHeading = "Call us anytime Monday through Friday from 9am–9pm EST or drop us an email and we'll get back to you asap.",
  buttonText = "Contact Us",
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
        className={_utils.cx(_styles, "button", "is-alternate")}
        data-w-id="54ea5e2d-bb71-5f31-26f4-3655f285bae3"
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
          data-w-id="54ea5e2d-bb71-5f31-26f4-3655f285bae6"
          tag="div"
        >
          <ContactUsFormModal
            formHeading={formHeading}
            subHeading={subHeading}
          />
          <_Builtin.Link
            className={_utils.cx(_styles, "close-button")}
            data-w-id="54ea5e2d-bb71-5f31-26f4-3655f285bae8"
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
            data-w-id="54ea5e2d-bb71-5f31-26f4-3655f285baeb"
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
