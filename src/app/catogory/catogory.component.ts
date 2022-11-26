import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catogory',
  templateUrl: './catogory.component.html',
  styleUrls: ['./catogory.component.css']
})
export class CatogoryComponent implements OnInit {
  open(){
    window.location.href="http://localhost:4200/games";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
