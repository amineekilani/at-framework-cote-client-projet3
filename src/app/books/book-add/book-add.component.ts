import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../book.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BookAddComponent
{
  constructor(private bookService:BookService, private router:Router)
  {
  }
  addBook(f:NgForm)
  {
    console.log(f);
    this.bookService.addBook(f.value.title,f.value.author,f.value.price);
    this.router.navigate(["/books"]);
  }
}