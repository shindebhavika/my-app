// Import necessary modules and components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component'; // Import BookComponent

@NgModule({
  declarations: [AppComponent, BooksComponent, BookComponent], // Include BookComponent in declarations
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
