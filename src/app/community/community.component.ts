import { Component, OnInit } from '@angular/core';
import {} from "@google/model-viewer";

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})

export class CommunityComponent implements OnInit {
  public name="";
  isFavorite :boolean=false;
  
  View="View";
  More="More";
  count= 1;
  constructor() { }
  display(){
    if(this.count ==1){
      this.isFavorite =true;
      this.View='Show';
      this.More='Less';
      this.count=0;
    }
    else{
      this.isFavorite =false;
      this.View='View';
      this.More='More';
      this.count=1;
    }
  }
  ngOnInit(): void {
  }

}
