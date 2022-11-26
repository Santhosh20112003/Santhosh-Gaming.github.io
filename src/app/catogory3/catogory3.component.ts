import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catogory3',
  templateUrl: './catogory3.component.html',
  styleUrls: ['./catogory3.component.css']
})
export class Catogory3Component implements OnInit {
  open(){
    window.location.href="http://localhost:4200/games";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
