// book.component.ts
import { Component, Input } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'] // Updated path
})
export class BookComponent {
  @Input() book: Book = {} as Book;

  addToCart(){
console.log(this.book)
  }
}
