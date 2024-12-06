import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent implements OnInit
{
  book?:Book;
  constructor(private activeRoute: ActivatedRoute, private bookService: BookService, private router: Router)
  {
  }
  editBook(f:NgForm)
  {
    this.bookService.editBook(this.book!);
    this.router.navigate(["/books"]);
  }
  ngOnInit(): void
  {
    this.activeRoute.params.subscribe
    (
      parametres=>
      {
        
        if(this.bookService.getBookById(+parametres["id"])!==undefined)
        {
          this.book=this.bookService.getBookById(+parametres["id"]);
          console.log(this.book);
        }
        else
        {
          console.log("Le livre est introuvable");
        }
      }
    )
  }
}