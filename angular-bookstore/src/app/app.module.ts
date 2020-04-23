import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookService } from './service/book.service';
import { HttpClientModule } from '@angular/common/http'
import { enableProdMode } from "@angular/core";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
enableProdMode();