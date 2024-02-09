import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  name = 'bhavikaaaa';
  src =
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg';
  name2 = 'radhika';
  src2 =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5PkW4fJsvhTn3s9hnv2nSU7a5jkGYsUH9Zl7YOHZKeA&s';
  isDisabled = false;

  handleClick() {
    this.isDisabled = true;
  
    document.body.style.backgroundColor = 'lightblue';
  }

  myName = '';
  //after ngmodal function js not needed
  // handleInput(event: any) {
  //   console.log(event.target.value);
  //   this.myName = event.target.value;
  // }
}
