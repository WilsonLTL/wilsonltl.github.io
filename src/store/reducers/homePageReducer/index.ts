import { PayloadAction } from '@reduxjs/toolkit'
import { INIT_DATA } from "../../actions/homePageActions";
import { homePageType } from "../../types/homePageType"

const initState: homePageType = {
  articleList: undefined,
}

const homePageReducer = (state = initState, action: PayloadAction<homePageType>) => {
  switch (action.type) {
    case INIT_DATA:
      state.articleList = action.payload.articleList;
      return { ...state };
    default:
      return { ...state };
  }
};

export default homePageReducer;
