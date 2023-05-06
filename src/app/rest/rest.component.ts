import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { RestDataService } from '../rest-data.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  data:any;
  constructor(private restservice: RestDataService) { 
   
  }

  ngOnInit(): void {
    this.restservice.getData().subscribe((data) => {
     
      this.data = data;
    });
  }
}
