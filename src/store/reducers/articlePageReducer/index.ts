import { PayloadAction } from "@reduxjs/toolkit";
import { UPDATE_ARTICLEPAGE_ARTICLE } from "../../actions/articlePageActions";
import { articlePageType } from "../../types/articlePageType";

const initState: articlePageType = {
  article: undefined
};

const createrPageReducer = (
  state = initState,
  action: PayloadAction<articlePageType>
) => {
  switch (action.type) {
    case UPDATE_ARTICLEPAGE_ARTICLE:
      state.article = action.payload.article
      return { ...state };
    default:
      return { ...state };
  }
};

export default createrPageReducer;
