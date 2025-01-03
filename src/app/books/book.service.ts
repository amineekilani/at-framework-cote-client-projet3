import { Injectable } from '@angular/core';
import { Book } from './book';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService
{
  private books=[];
  private baseURL="http://localhost:3000/books";
  bookEdited=new Subject<Book[]>();
  getBooks():Observable<Book[]>
  {
    //return [...this.books];
    return this.httpClient.get<Book[]>(this.baseURL)
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