export const SET_COCKTAILS = "GET_COCKTAILS";
export const CHANGE_COCKTAILS_DATA = "CHANGE_COCKTAILS_DATA";

export const setCocktails = (data) => ({
  type: SET_COCKTAILS,
  payload: data,
});

export const changeCocktailData = (cocktail) => ({
  type: CHANGE_COCKTAILS_DATA,
  payload: cocktail,
});

const initialState = {
  cocktails: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COCKTAILS: {
      return {
        ...state,
        cocktails: action.payload,
      };
    }

    case CHANGE_COCKTAILS_DATA: {
      const updatedPosts = state.cocktails.map((oldPost) => {
        if (oldPost.idDrink === action.payload.idDrink) {
          return action.payload;
        }

        return oldPost;
      });

      return {
        ...state,
        posts: updatedPosts,
      };
    }

    default:
      return state;
  }
};
