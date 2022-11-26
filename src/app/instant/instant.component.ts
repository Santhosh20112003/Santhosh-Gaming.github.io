import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instant',
  templateUrl: './instant.component.html',
  styleUrls: ['./instant.component.css']
})
export class InstantComponent implements OnInit {
  fullScreen() {
    let elem = document.documentElement;
    let methodToBeInvoked = elem.requestFullscreen;
    if (methodToBeInvoked) methodToBeInvoked.call(elem);
}
  constructor() { }

  ngOnInit(): void {
  }

}
