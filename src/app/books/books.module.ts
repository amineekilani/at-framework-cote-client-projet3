import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { FormsModule } from '@angular/forms';
import { BooksStatsComponent } from './books-stats/books-stats.component';


@NgModule({
  declarations: [
    BookListComponent,
    BookAddComponent,
    BookEditComponent,
    BooksStatsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule
  ]
})
export class BooksModule { }
