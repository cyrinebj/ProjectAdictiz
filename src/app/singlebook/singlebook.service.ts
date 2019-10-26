import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SinglebookService {

  constructor(private httpClient : HttpClient) {    
  }
  GetMyBooks(link){
    return this.httpClient.get(link);
  }
  
}
