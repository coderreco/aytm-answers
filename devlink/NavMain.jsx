"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { NavbarDropdownLink } from "./NavbarDropdownLink";
import { NavbarMultiplyBg } from "./NavbarMultiplyBg";
import * as _utils from "./utils";
import _styles from "./NavMain.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-407"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c379","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c379","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626227992075},"e-2":{"id":"e-2","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-590"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c379","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c379","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626227992075},"e-3":{"id":"e-3","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-382"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c37f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c37f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626227992075},"e-4":{"id":"e-4","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-381"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c37f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c37f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626227992075},"e-5":{"id":"e-5","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-384"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c37f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c37f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626242008857},"e-6":{"id":"e-6","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-585"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c37f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c37f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626242008858},"e-13":{"id":"e-13","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-473"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c3cd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c3cd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1651108276602},"e-14":{"id":"e-14","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-467"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c3cd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c3cd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1651108276602},"e-15":{"id":"e-15","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-458"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c3cd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c3cd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1651108276602},"e-16":{"id":"e-16","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-477"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c3cd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c3cd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1651108276602},"e-17":{"id":"e-17","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-460"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c3ba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c3ba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1651108277538},"e-18":{"id":"e-18","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-476"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c3ba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c3ba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1651108277538},"e-19":{"id":"e-19","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-456"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c3ba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c3ba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1651108277538},"e-20":{"id":"e-20","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-468"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c3ba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c3ba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1651108277538},"e-21":{"id":"e-21","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-466"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c3a5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c3a5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1651108278106},"e-22":{"id":"e-22","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-474"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c3a5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c3a5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1651108278106},"e-23":{"id":"e-23","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-465"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c3a5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c3a5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1651108278106},"e-24":{"id":"e-24","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-469"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c3a5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c3a5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1651108278106},"e-25":{"id":"e-25","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-461"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c392","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c392","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1651108278642},"e-26":{"id":"e-26","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-457"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c392","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c392","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1651108278642},"e-27":{"id":"e-27","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-475"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c392","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c392","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1651108278642},"e-28":{"id":"e-28","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b7d19c5f-7f34-d386-5a23-66057448c392","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d19c5f-7f34-d386-5a23-66057448c392","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1651108278642},"e-37":{"id":"e-37","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-462"}},"mediaQueries":["main"],"target":{"id":"20382e54-8735-b66b-0249-5151d19bbdbb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"20382e54-8735-b66b-0249-5151d19bbdbb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1652301805028},"e-38":{"id":"e-38","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-472"}},"mediaQueries":["main"],"target":{"id":"20382e54-8735-b66b-0249-5151d19bbdbb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"20382e54-8735-b66b-0249-5151d19bbdbb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1652301805028}},"actionLists":{"a":{"id":"a","title":"Navbar 1 [Open Menu]","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["5612bbf1-86eb-618f-2e62-960fec36c673"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["5612bbf1-86eb-618f-2e62-960fec36c66f"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["5612bbf1-86eb-618f-2e62-960fec36c67d"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["5612bbf1-86eb-618f-2e62-960fec36c67d"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["5612bbf1-86eb-618f-2e62-960fec36c66f"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-2":{"id":"a-2","title":"Navbar 1 [Close Menu]","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["5612bbf1-86eb-618f-2e62-960fec36c66f"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["5612bbf1-86eb-618f-2e62-960fec36c67d"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["5612bbf1-86eb-618f-2e62-960fec36c66f"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["5612bbf1-86eb-618f-2e62-960fec36c67d"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["5612bbf1-86eb-618f-2e62-960fec36c673"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-3":{"id":"a-3","title":"Dropdown [Open]","actionItemGroups":[{"actionItems":[{"id":"a-3-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-arrow","selectorGuids":["5612bbf1-86eb-618f-2e62-960fec36c671"]},"zValue":-90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-3-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-arrow","selectorGuids":["5612bbf1-86eb-618f-2e62-960fec36c671"]},"yValue":null,"zValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626161550593},"a-4":{"id":"a-4","title":"Dropdown [Close]","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-arrow","selectorGuids":["5612bbf1-86eb-618f-2e62-960fec36c671"]},"zValue":-90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626161607847},"a-5":{"id":"a-5","title":"Navbar 1 Dropdown [Open] [Tablet]","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-list","selectorGuids":["5612bbf1-86eb-618f-2e62-960fec36c679"]},"heightValue":0,"widthUnit":"px","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-5-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-list","selectorGuids":["5612bbf1-86eb-618f-2e62-960fec36c679"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-6":{"id":"a-6","title":"Navbar 1 Dropdown [Close] [Tablet]","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-list","selectorGuids":["5612bbf1-86eb-618f-2e62-960fec36c679"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-8":{"id":"a-8","title":"Search Modal [Open]","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outCubic","duration":250,"target":{"selector":".navbar_menu-left","selectorGuids":["cddd7be2-cadd-5a23-ca10-8404ff5a770f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-8-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".navbar_menu-left","selectorGuids":["cddd7be2-cadd-5a23-ca10-8404ff5a770f"]},"value":"none"}}]},{"actionItems":[{"id":"a-8-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outCubic","duration":500,"target":{"selector":".search-component","selectorGuids":["12e2ddb1-f3ce-e752-8b20-caf45689af64"]},"widthValue":300,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644220869174},"a-29":{"id":"a-29","title":"Search Modal [Close]","actionItemGroups":[{"actionItems":[{"id":"a-29-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outCubic","duration":250,"target":{"selector":".search-component","selectorGuids":["12e2ddb1-f3ce-e752-8b20-caf45689af64"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-29-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".navbar_menu-left","selectorGuids":["cddd7be2-cadd-5a23-ca10-8404ff5a770f"]},"value":"flex"}}]},{"actionItems":[{"id":"a-29-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outCubic","duration":500,"target":{"selector":".navbar_menu-left","selectorGuids":["cddd7be2-cadd-5a23-ca10-8404ff5a770f"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644220869174}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavMain({
  as: _Component = _Builtin.NavbarWrapper,
  announcementBannerVisibility = true,

  announcementBannerLink = {
    href: "#",
  },
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar_root")}
      data-w-id="b7d19c5f-7f34-d386-5a23-66057448c379"
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      config={{
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        collapse: "medium",
        noScroll: false,
      }}
    >
      {announcementBannerVisibility ? (
        <_Builtin.Link
          className={_utils.cx(_styles, "announcement-banner")}
          button={false}
          block="inline"
          options={announcementBannerLink}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-block-2")}
            tag="div"
          >
            {"CONVERSATION AI IS NOW LIVE —"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "text-weight-light")}
            tag="div"
          >
            {"Unlock deeper qualitative insights at scale"}
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "announcement-arrow")}
            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2211%22%20height%3D%2211%22%20viewBox%3D%220%200%2011%2011%22%3E%0A%20%20%3Cpath%20id%3D%22Path_6939%22%20data-name%3D%22Path%206939%22%20d%3D%22M89.5%2C14a5.5%2C5.5%2C0%2C1%2C0%2C3.889%2C1.611A5.5%2C5.5%2C0%2C0%2C0%2C89.5%2C14Zm1.578%2C6.007-2.187%2C2.187a.686.686%2C0%2C0%2C1-.969-.97L89.647%2C19.5l-1.725-1.724a.686.686%2C0%2C0%2C1%2C.969-.97l2.187%2C2.187a.683.683%2C0%2C0%2C1%2C.2.507v.022a.686.686%2C0%2C0%2C1-.2.485Z%22%20transform%3D%22translate(-84%20-14)%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Link>
      ) : null}
      <_Builtin.Block
        className={_utils.cx(_styles, "navbar_component")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "navbar_container")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar_wrapper")}
            tag="div"
          >
            <_Builtin.NavbarBrand
              className={_utils.cx(
                _styles,
                "nav-brand_rive-link",
                "hide-tablet"
              )}
              options={{
                href: "#",
              }}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "rive-logo")}
                value="%3Ccanvas%20id%3D%22logo-anim%22%20class%3D%22rive-path-art%20rive%22%3E%3C%2Fcanvas%3E%0A%3Cscript%3E%0Awindow.addEventListener('load'%2C%20function()%20%7B%0Alet%20logoCanvas%20%3D%20document.getElementById(%22logo-anim%22)%3B%0Aconst%20logo%20%3D%20new%20rive.Rive(%7B%0A%20%20src%3A%0A%20%20%20%20%22https%3A%2F%2Fuploads-ssl.webflow.com%2F62c5cd2a77ff1625c04bcfcd%2F6466a2ae8bc6de01fd245e67_aytm_logo.txt%22%2C%0A%20%20canvas%3A%20logoCanvas%2C%0A%20%20artboard%3A%20%22_aytm_logo%22%2C%0A%20%20autoplay%3A%20true%2C%0A%20%20stateMachines%3A%20%5B%22_state_machine%22%5D%2C%0A%20%20onLoad%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20logo.resizeDrawingSurfaceToCanvas()%3B%0A%20%20%7D%2C%0A%20%20onStateChange%3A%20(riveEvent)%20%3D%3E%20%7B%0A%20%20%20%20const%20newStates%20%3D%20riveEvent.data%3B%0A%20%20%20%20let%20url%20%3D%20window.location.origin%0A%20%20%20%20let%20singleClickWidth%20%3D%20479%3B%0A%20%20%20%20newStates.forEach((state)%20%3D%3E%20%7B%0A%20%20%20%20switch%20(state)%20%7B%0A%20%20%20%20%20%20case%20'Linkout'%3A%0A%20%20%20%20%20%20%09window.location.href%20%3D%20%60%24%7Burl%7D%2F%60%0A%20%20%20%20%20%20%09break%3B%0A%20%20%20%20%20%20default%3A%0A%20%20%20%20%20%20%20%20return%0A%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%7D)%3B%0A%7D)%0A%3C%2Fscript%3E"
              />
              <_Builtin.Image
                className={_utils.cx(_styles, "logo-text")}
                width="auto"
                height="auto"
                loading="lazy"
                alt=""
                src="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/669a7fb6eb5edb7c7ebbe69e_Group_5.svg"
              />
            </_Builtin.NavbarBrand>
            <_Builtin.NavbarBrand
              className={_utils.cx(_styles, "nav-brand_logo-mobile")}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "rive-logo")}
                width="auto"
                height="auto"
                loading="lazy"
                alt="aytm logo icon"
                src="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/62c5cd2a77ff166ad14bd06f_logo-on-dark.svg"
              />
            </_Builtin.NavbarBrand>
            <_Builtin.NavbarMenu
              className={_utils.cx(_styles, "navbar_menu")}
              tag="nav"
              role="navigation"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "search-component-mobile")}
                tag="div"
              >
                <_Builtin.SearchForm
                  className={_utils.cx(_styles, "search")}
                  action="/search"
                >
                  <_Builtin.SearchInput
                    className={_utils.cx(_styles, "form-input", "search-input")}
                    placeholder="Search…"
                    autoFocus={false}
                    disabled={false}
                    maxLength={256}
                    name="query"
                    required={true}
                    type="search"
                  />
                  <_Builtin.SearchButton
                    className={_utils.cx(
                      _styles,
                      "button-secondary",
                      "search-button"
                    )}
                    value="↗︎"
                    type="submit"
                  />
                </_Builtin.SearchForm>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "navbar_menu-left")}
                tag="div"
              >
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "navbar_menu-dropdown")}
                  data-w-id="b7d19c5f-7f34-d386-5a23-66057448c37f"
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(
                      _styles,
                      "nav-link",
                      "dropdown-toggle"
                    )}
                    tag="div"
                    id="solutions"
                  >
                    <_Builtin.Icon
                      className={_utils.cx(_styles, "dropdown-arrow")}
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                    <_Builtin.Block tag="div">{"Solutions"}</_Builtin.Block>
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(_styles, "navbar_dropdown-list")}
                    tag="nav"
                  >
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Overview"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"SOLUTIONSCenter"}
                    </_Builtin.DropdownLink>
                    <NavbarDropdownLink
                      navbarDropdownLinkLink={{
                        href: "#",
                      }}
                    />
                    <NavbarDropdownLink
                      navbarDropdownLinkLink={{
                        href: "#",
                      }}
                      navbarDropdownLinkText="Market landscape"
                    />
                    <NavbarDropdownLink
                      navbarDropdownLinkLink={{
                        href: "#",
                      }}
                      navbarDropdownLinkText="Consumer experience"
                    />
                    <NavbarDropdownLink
                      navbarDropdownLinkLink={{
                        href: "#",
                      }}
                      navbarDropdownLinkText="Brand insights"
                    />
                    <NavbarDropdownLink
                      navbarDropdownLinkLink={{
                        href: "#",
                      }}
                      navbarDropdownLinkText="Marketing strategy"
                    />
                    <NavbarDropdownLink
                      navbarDropdownLinkLink={{
                        href: "#",
                      }}
                      navbarDropdownLinkText="Business strategy"
                    />
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"XpertSolutions"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Full Service Solutions"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"DIY"}
                    </_Builtin.DropdownLink>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "dropdown-arrow-wrapper",
                        "solutions"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "arrow-up")}
                        tag="div"
                      />
                    </_Builtin.Block>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "navbar_menu-dropdown")}
                  data-w-id="b7d19c5f-7f34-d386-5a23-66057448c392"
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(
                      _styles,
                      "nav-link",
                      "dropdown-toggle"
                    )}
                    tag="div"
                    id="platform"
                  >
                    <_Builtin.Icon
                      className={_utils.cx(_styles, "dropdown-arrow")}
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                    <_Builtin.Block tag="div">{"Platform"}</_Builtin.Block>
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(_styles, "navbar_dropdown-list")}
                    tag="nav"
                  >
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Overview"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Skipper AI"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Conversation AI"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Ecommerce"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Sample Engine"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"SurveyAuthoringTool"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"InsightsDashboard"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Insights portal"}
                    </_Builtin.DropdownLink>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "dropdown-arrow-wrapper",
                        "platform"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "arrow-up")}
                        tag="div"
                      />
                    </_Builtin.Block>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "navbar_menu-dropdown")}
                  data-w-id="b7d19c5f-7f34-d386-5a23-66057448c3a5"
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(
                      _styles,
                      "nav-link",
                      "dropdown-toggle"
                    )}
                    tag="div"
                    id="community"
                  >
                    <_Builtin.Icon
                      className={_utils.cx(_styles, "dropdown-arrow")}
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                    <_Builtin.Block tag="div">{"Community"}</_Builtin.Block>
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(_styles, "navbar_dropdown-list")}
                    tag="nav"
                  >
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Overview"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"PaidViewpoint"}
                    </_Builtin.DropdownLink>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "dropdown-arrow-wrapper",
                        "community"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "arrow-up")}
                        tag="div"
                      />
                    </_Builtin.Block>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav-link", "dropdown-toggle")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Pricing"}</_Builtin.Block>
                  <_Builtin.Icon
                    className={_utils.cx(
                      _styles,
                      "dropdown-arrow",
                      "pricing-arrow"
                    )}
                    widget={{
                      type: "icon",
                      icon: "dropdown-toggle",
                    }}
                  />
                </_Builtin.Link>
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "navbar_menu-dropdown")}
                  data-w-id="b7d19c5f-7f34-d386-5a23-66057448c3ba"
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(
                      _styles,
                      "nav-link",
                      "dropdown-toggle"
                    )}
                    tag="div"
                    id="company"
                  >
                    <_Builtin.Icon
                      className={_utils.cx(_styles, "dropdown-arrow")}
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                    <_Builtin.Block tag="div">{"Company"}</_Builtin.Block>
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(_styles, "navbar_dropdown-list")}
                    tag="nav"
                  >
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"About Us"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Our Story"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Team"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Careers"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Partnerships"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"InnovationLab"}
                    </_Builtin.DropdownLink>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "dropdown-arrow-wrapper",
                        "company"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "arrow-up")}
                        tag="div"
                      />
                    </_Builtin.Block>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "navbar_menu-dropdown")}
                  data-w-id="b7d19c5f-7f34-d386-5a23-66057448c3cd"
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(
                      _styles,
                      "nav-link",
                      "dropdown-toggle"
                    )}
                    tag="address"
                    id="resources"
                  >
                    <_Builtin.Icon
                      className={_utils.cx(_styles, "dropdown-arrow")}
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block")}
                      tag="div"
                    >
                      {"Resources"}
                    </_Builtin.Block>
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(_styles, "navbar_dropdown-list")}
                    tag="nav"
                  >
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Resource Hub"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "https://academy.aytm.com/",
                      }}
                    >
                      {"AIHUB"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "https://academy.aytm.com/",
                        target: "_blank",
                      }}
                    >
                      {"Lighthouse Academy"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      target="_blank"
                      options={{
                        href: "https://aytm.zendesk.com/hc/en-us",
                        target: "_blank",
                      }}
                    >
                      {"Help Center"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Insighter"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Blog"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Certifications"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Case studies"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Testimonials"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Data Security"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                        target: "_blank",
                      }}
                    >
                      {"Margin of Error Calculator"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "navbar_dropdown-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"AI Privacy Principles"}
                    </_Builtin.DropdownLink>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "dropdown-arrow-wrapper",
                        "resources"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "arrow-up")}
                        tag="div"
                      />
                    </_Builtin.Block>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "search-component",
                  "hide-tablet"
                )}
                tag="div"
              >
                <_Builtin.SearchForm
                  className={_utils.cx(_styles, "search")}
                  action="/search"
                >
                  <_Builtin.SearchInput
                    className={_utils.cx(_styles, "form-input", "search-input")}
                    placeholder="Search…"
                    autoFocus={false}
                    disabled={false}
                    maxLength={256}
                    name="query"
                    required={true}
                    type="search"
                    id="search"
                  />
                  <_Builtin.SearchButton
                    className={_utils.cx(
                      _styles,
                      "button-secondary",
                      "search-button"
                    )}
                    value="↗︎"
                    type="submit"
                  />
                </_Builtin.SearchForm>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "navbar_menu-right")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "navbar_menu-buttons")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "navbar_button-wrapper",
                      "hide-tablet"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "search_modal-trigger")}
                      data-w-id="20382e54-8735-b66b-0249-5151d19bbdbb"
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "html-embed-3")}
                        value="%3Csvg%20id%3D%22Search_Icon%22%20data-name%3D%22Search%20Icon%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%3Crect%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22%23fcfcfc%22%20opacity%3D%220%22%2F%3E%0A%20%20%3Cg%20id%3D%22Icon%22%20transform%3D%22translate(3%203)%22%3E%0A%20%20%20%20%3Ccircle%20id%3D%22Path%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%228%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%20%20%3Cline%20id%3D%22Line%22%20x1%3D%224.326%22%20y1%3D%224.35%22%20transform%3D%22translate(13.837%2013.65)%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "navbar_button-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "button-secondary",
                        "is-alternate",
                        "is_nav-button"
                      )}
                      button={true}
                      id="webflow-registration"
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Span>{"Scheduleademo"}</_Builtin.Span>
                    </_Builtin.Link>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "navbar_button-wrapper",
                      "hide-tablet"
                    )}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "button",
                        "is-alternate",
                        "is_nav-button"
                      )}
                      button={true}
                      id="webflow-login"
                      block=""
                      options={{
                        href: "/session/new",
                      }}
                    >
                      {"Login"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "navbar_button-wrapper",
                      "chat-wrapper"
                    )}
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "chat-embed")}
                      value="%3Cdiv%20class%3D%22navbar_button-wrapper%20chat-widget%22%3E%3Ca%20style%3D%22visibility%3Ahidden%3B%22%20id%3D%22chat-widget%22%20href%3D%22%23%22%20class%3D%22navbar_chat%20w-inline-block%22%20onclick%3D%22window.open(%0A%20%20%20%20'https%3A%2F%2Fstatic.zdassets.com%2Fweb_widget%2Flatest%2FliveChat.html%3Fv%3D10%23key%3Daytm.zendesk.com'%2C'pagename'%2C'resizable%2Cdirectories%3Dno%2Ctitlebar%3Dno%2Ctoolbar%3Dno%2Clocation%3Dno%2Cstatus%3Dno%2Cmenubar%3Dno%2Cheight%3D500%2Cwidth%3D400%2Ctop%3D500%2Cleft%3D600'%0A%20%20)%3B%0A%20%20return%20false%3B%22%3E%0A%20%20%3Cimg%20src%3D%22https%3A%2F%2Fuploads-ssl.webflow.com%2F62c5cd2a77ff1625c04bcfcd%2F65e66a3e6a0ddd9f0018e4e3_live-chat.svg%22%20loading%3D%22lazy%22%20alt%20class%3D%22chat-image%22%3E%0A%20%20%3Cimg%20src%3D%22https%3A%2F%2Fuploads-ssl.webflow.com%2F62c5cd2a77ff1625c04bcfcd%2F65e66a3ea3edc1ab09551430_live-chat-hovered.svg%22%20loading%3D%22lazy%22%20alt%20class%3D%22chat-image%20hovered%22%3E%0A%20%20%3C%2Fa%3E%3C%2Fdiv%3E"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.NavbarMenu>
            <_Builtin.NavbarButton
              className={_utils.cx(_styles, "navbar_menu-button")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-icon1")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "menu-icon1_line-top")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "menu-icon1_line-middle")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "menu-icon_line-middle-inner"
                    )}
                    tag="div"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "menu-icon1_line-bottom")}
                  tag="div"
                />
              </_Builtin.Block>
            </_Builtin.NavbarButton>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "navbar_button-wrapper",
                "margin-0",
                "show-tablet"
              )}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "button",
                  "is-alternate",
                  "is_nav-button"
                )}
                button={true}
                id="webflow-login"
                block=""
                options={{
                  href: "/session/new",
                }}
              >
                {"Login"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.HtmlEmbed value="%3Cscript%20src%3D%22%2Fwebflow_header.js%22%20type%3D%22text%2Fjavascript%22%3E%3C%2Fscript%3E" />
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "pride-el")} tag="div" />
      <NavbarMultiplyBg />
    </_Component>
  );
}
