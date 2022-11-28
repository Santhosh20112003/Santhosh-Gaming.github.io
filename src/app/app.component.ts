import { Component } from '@angular/core';
import {faAngleUp ,faRobot} from '@fortawesome/free-solid-svg-icons'
import {faBots} from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  FaAngleUp = faAngleUp;
  Bots = faRobot;

  parent(){
    window.location.href="https://santhosh-technologies.netlify.app"; 
  }
 
}
