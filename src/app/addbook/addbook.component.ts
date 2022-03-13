import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Store} from "@ngrx/store";
import {addBook} from "../book.actions";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {

  name = new FormControl('');

  constructor(private store: Store) {}

  ngOnInit(): void {
  }

  submit() {
    this.store.dispatch(addBook({book: { name: this.name.value, author: '' }}))
  }
}
