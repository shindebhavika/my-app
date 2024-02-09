import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BookStoreService } from './book-store.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  constructor(private booksService: BookStoreService) {
    //  this.books =booksService.getBooks()
  }

  books: Book[] = [];

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }
  isShowing: boolean = true;
  card: Book[] = [];
  
  addTo(e: any) {
    console.log(e.name);
  }
}
