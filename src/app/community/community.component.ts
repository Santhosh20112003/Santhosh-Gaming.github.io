import { Component, OnInit } from '@angular/core';
import {} from "@google/model-viewer";
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
import * as L from 'leaflet';
import {Toast} from 'bootstrap';
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})

export class CommunityComponent implements OnInit {
  public name="";
  isFavorite :boolean=false;
  FaAngleUp = faAngleUp;
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
  private map:any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [51.505, -0.09],
    zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }
  ngOnInit(): void {
 
  }
toast(value:any){
  value.show();
}
}

