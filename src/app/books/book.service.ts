import { Injectable } from '@angular/core';
import { Book } from './book';
import { Subject } from 'rxjs';

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
  bookEdited=new Subject<Book[]>();
  getBooks():Book[]
  {
    return [...this.books];
  }
  constructor() {}
  addBook(title:string,author:string,price:number)
  {
    const newBook=new Book(this.books[this.books.length-1].id+1,title,author,price);
    this.books=[...this.books,newBook];
  }
  getBookById(id:number):Book | undefined
  {
    return this.books.find(book=>book.id==id);
  }
  editBook(book:Book)
  {
    this.books=this.books.map(b=>b.id===book.id?book:b);
  }
  deleteBook(id:number)
  {
    this.books=this.books.filter(book=>book.id!==id);
    //console.log(this.books);
    this.bookEdited.next([...this.books]);
  }
}