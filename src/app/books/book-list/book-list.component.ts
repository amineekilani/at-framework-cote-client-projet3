import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent
{
  books?: Book[];
  constructor(private bookService: BookService){}
  deleteBook(id: number): void
  {
    if(confirm("Etes-vous sûr de vouloir supprimer ce livre ?"))
      this.bookService.deleteBook(id);
    //this.books=this.bookService.getBooks();
  }
  ngOnInit(): void
  {
    this.books=this.bookService.getBooks();
    this.bookService.bookEdited.subscribe(newBooks=>this.books=newBooks);
  }
}