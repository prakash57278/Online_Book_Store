import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookService } from './service/book.service';
import { HttpClientModule } from '@angular/common/http'
import { enableProdMode } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [{ path: 'books', component: BookListComponent },
{ path: 'category/:id', component: BookListComponent },
{ path: '', redirectTo: '/books', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
enableProdMode();