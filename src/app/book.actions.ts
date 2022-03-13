import {createAction, props} from "@ngrx/store";
import {Book} from "./book";

export const addBook = createAction('add book', props<{ book: Book }>());
