// import { 
//   FETCHING_NEWS,
//   FETCHING_NEWS_FAILURE,
//   FETCHING_NEWS_SUCCESS,
//   INCREASING_CURRENT_PAGE,
// } from '../constants'

const initialState = {
  chosenAsset: false,
  amount: false,
  dataPurchased: 0,
}

export default newsReader = (state = initialState, action) => {
  switch (action.type){
    // case FETCHING_NEWS:
    //   return {
    //     ...state,
    //     isFetching: true,
    //   }
    // case FETCHING_NEWS_SUCCESS:
    //   return {
    //     ...state,
    //     isFetching: false,
    //     newsList: [...state.newsList, ...action.data],
    //   }
    // case FETCHING_NEWS_FAILURE:
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: true
    //   }
    // case INCREASING_CURRENT_PAGE:
    //   return {
    //     ...state,
    //     currentNewsPage: state.currentNewsPage + 1
    //   }
    default:
      return state
  }
}
