import { Component, OnInit } from '@angular/core';
import { Book } from '../../commom/book';
import { BookService } from '../../service/book.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-book-list',
  // templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  currentCategoryId: number;
  books: Book[];

  constructor(private _bookservice: BookService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(() => {
      this.listBooks();
    })
  }

  listBooks() {
    const hasCategoryId: boolean = this._activatedRoute.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this._activatedRoute.snapshot.paramMap.get('id');
    } else {
      this.currentCategoryId = 1;
    }
    this._bookservice.getBooks(this.currentCategoryId).subscribe(
      data => {
        this.books = data;
      }
    )
  }
}
