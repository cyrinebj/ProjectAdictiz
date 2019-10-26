import { Component, OnInit } from '@angular/core';
import{SinglebookService} from './../singlebook/singlebook.service';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {
  link : any;
  book : any;
  constructor(private activatedRoute:ActivatedRoute, private singlebookService:SinglebookService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.link = params['link'];
    });
    console.log(this.link);

    this.singlebookService.GetMyBooks(this.link).subscribe(res => {
      console.log(res)
        this.book = res;
    })

  }



}
