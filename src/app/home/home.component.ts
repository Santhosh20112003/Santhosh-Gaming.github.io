import { Component, OnInit } from '@angular/core';
import {faRocket,faAngleUp} from '@fortawesome/free-solid-svg-icons';


import 'swiper/swiper-bundle.min.css';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  genre1 = "ACTION & ADVENTURE";
  genre2 = "RACING & FLYING";
  genre3 = "SPORTS";
  genre4 = "ROLEPLAY & SHOOTERS";
  genre5 = "INDIE & STRATEGY";
  FaAngleUp = faAngleUp;
  farocket = faRocket;
  constructor() { }

 

  ngOnInit(): void {
  }

}
