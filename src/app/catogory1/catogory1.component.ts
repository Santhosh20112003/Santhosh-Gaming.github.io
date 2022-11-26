import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catogory1',
  templateUrl: './catogory1.component.html',
  styleUrls: ['./catogory1.component.css']
})
export class Catogory1Component implements OnInit {
  open(){
    window.location.href="http://localhost:4200/games";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
