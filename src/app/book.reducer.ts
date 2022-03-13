import {createReducer, on} from "@ngrx/store";
import {addBook} from "./book.actions";

export const bookReducer = createReducer({},
  on(addBook, (state: any, action) => {
    console.log(action)
    return {
      ...state,
      books: [
        ...state.books ?? [],
        action.book
      ]
    }
  })
);
