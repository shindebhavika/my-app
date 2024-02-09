import { Component } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  books: Book[] = [
    {
      name: 'Banyan Moon by Thao Thai (June 13)',
      src: 'https://thestoryexchange.org/app/uploads/2023/06/IMG_7629-525x792.jpeg',
      amount: 100,
    },
    {
      name: 'Tom Lake by Ann Patchett (Aug. 1)',
      src: 'https://thestoryexchange.org/app/uploads/2023/06/IMG_7632-525x793.jpeg',
      amount: 300,
    },
    {
      name: 'Tom Lake by Ann Patchett (Aug. 1)',
      src: 'https://thestoryexchange.org/app/uploads/2023/06/IMG_7632-525x793.jpeg',
      amount: 300,
    },
    {
      name: 'Tom Lake by Ann Patchett (Aug. 1)',
      src: 'https://thestoryexchange.org/app/uploads/2023/06/IMG_7632-525x793.jpeg',
      amount: 300,
    },
    {
      name: 'Tom Lake by Ann Patchett (Aug. 1)',
      src: 'https://thestoryexchange.org/app/uploads/2023/06/IMG_7632-525x793.jpeg',
      amount: 300,
    },
    {
      name: 'Tom Lake by Ann Patchett (Aug. 1)',
      src: 'https://thestoryexchange.org/app/uploads/2023/06/IMG_7632-525x793.jpeg',
      amount: 300,
    },
  ];

  isShowing: boolean = true;
  card: Book[] = [];
}
