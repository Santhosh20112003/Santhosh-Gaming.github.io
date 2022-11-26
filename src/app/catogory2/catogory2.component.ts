import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catogory2',
  templateUrl: './catogory2.component.html',
  styleUrls: ['./catogory2.component.css']
})
export class Catogory2Component implements OnInit {
  open(){
    window.location.href="http://localhost:4200/games";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
