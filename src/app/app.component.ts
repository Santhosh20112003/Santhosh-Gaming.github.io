import { Component } from '@angular/core';
import {faAngleUp ,faRobot,faHeart,faHouse,faAlignRight,faUsers,faPuzzlePiece,faBars,faDownload} from '@fortawesome/free-solid-svg-icons'
import {faBots} from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  FaAngleUp = faAngleUp;
  group=faBars;
  dispaly = "d-flex";
  Bots = faRobot;
  icon = faHeart;
  house=faHouse;
  allgames=faAlignRight;
  community =faUsers;
  instant= faPuzzlePiece;
  download =faDownload;
  val = 0;
  count = 0;
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
    close(value:any){
     
    }
    
  
  parent(){
    window.location.href="https://santhosh-technologies.netlify.app"; 
  }
 
}
