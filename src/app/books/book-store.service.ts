import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
getBooks(){
  return [
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
  ]
}
  constructor() { }
}
