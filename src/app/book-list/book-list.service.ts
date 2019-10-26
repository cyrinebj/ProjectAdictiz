import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookListService {

  constructor( private httpClient : HttpClient) {  }

  getAllBooks(){
    return this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q=1000');
  }
}
