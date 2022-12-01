import { Component, OnInit } from '@angular/core';
import {faRocket,faAngleUp} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  FaAngleUp = faAngleUp;
  constructor() { }

  ngOnInit(): void {
  }

}
