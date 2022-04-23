import { PayloadAction } from "@reduxjs/toolkit";
import {
  UPDATE_CREATERPAGE_TITLE,
  UPDATE_CREATERPAGE_DESCRIPTION,
  UPDATE_CREATERPAGE_CONTENT,
} from "../../actions/createrPageActions";
import { createrPageType } from "../../types/createrPageType";

const initState: createrPageType = {
  title: "",
  description: "",
  content: "",
};

const createrPageReducer = (
  state = initState,
  action: PayloadAction<createrPageType>
) => {
  switch (action.type) {
    case UPDATE_CREATERPAGE_TITLE:
      state.title = action.payload.title;
      return { ...state };
    case UPDATE_CREATERPAGE_DESCRIPTION:
      state.description = action.payload.description;
      return { ...state };
    case UPDATE_CREATERPAGE_CONTENT:
      state.content = action.payload.content;
      return { ...state };
    default:
      return { ...state };
  }
};

export default createrPageReducer;
