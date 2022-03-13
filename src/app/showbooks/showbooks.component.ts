import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectBooks} from "../book.selectors";

@Component({
  selector: 'app-showbooks',
  templateUrl: './showbooks.component.html',
  styleUrls: ['./showbooks.component.scss']
})
export class ShowbooksComponent implements OnInit {

  constructor(private store: Store) {
    this.store.select(selectBooks).subscribe(console.log)
  }

  books$ = this.store.select(selectBooks);

  ngOnInit(): void {
  }

}
