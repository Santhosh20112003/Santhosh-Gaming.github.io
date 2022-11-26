import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catogory4',
  templateUrl: './catogory4.component.html',
  styleUrls: ['./catogory4.component.css']
})
export class Catogory4Component implements OnInit {
  open(){
    window.location.href="http://localhost:4200/games";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
