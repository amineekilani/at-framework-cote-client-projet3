import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-books-stats',
  templateUrl: './books-stats.component.html',
  styleUrl: './books-stats.component.css'
})
export class BooksStatsComponent implements OnInit
{
  books?: Book[];
  constructor(private bookService: BookService){}
  ngOnInit(): void
  {
    this.books=this.bookService.getBooks();
    this.bookService.bookEdited.subscribe(newBooks=>this.books=newBooks);
  }
}