import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books=[
    new Book(1,"Inverting the Pyramid","Jonathan Wilson",14),
    new Book(2,"I Am Zlatan Ibrahimović","Zlatan Ibrahimović",12),
    new Book(3,"I Think Therefore I Play","Andrea Pirlo",13),
    new Book(4,"Commitment: My Autobiography","Didier Drogba",15),
    new Book(5,"Mein Kampf","Adolf Hitler",19)
  ];
  getBooks()
  {
    return this.books;
  }

  constructor() { }
}
