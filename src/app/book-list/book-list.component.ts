import { Component, OnInit } from '@angular/core';
import{BookListService} from './book-list.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
 
  BookLists : any =[];
  MyDataSource: any;
  constructor(private bookListService:BookListService) { }

  ngOnInit() {
    this.getBooks();
  }
   
  getBooks(){
     this.bookListService.getAllBooks().subscribe(res=>{
       this.BookLists= res['items'];
     }) ;
  }
  applyFilter(filterValue: string) {
    this.BookLists.filter = filterValue.trim().toLowerCase();
  }

}
