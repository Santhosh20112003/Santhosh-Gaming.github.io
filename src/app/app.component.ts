import { Component } from '@angular/core';
import {faAngleUp ,faRobot,faHeart} from '@fortawesome/free-solid-svg-icons'
import {faBots} from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  FaAngleUp = faAngleUp;
  Bots = faRobot;
  icon = faHeart;
  val = 0;
  public col ="d-none";
  myfunc(){
    if(this.val==0){
      this.col ="d-flex";
      this.val= 1;
    }
    else{
      this.col ="d-none";
      this.val= 0;
    }
    }
  
  parent(){
    window.location.href="https://santhosh-technologies.netlify.app"; 
  }
 
}
