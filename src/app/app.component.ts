import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'personalapp4b';
  name: string = 'Betja Ortiz'
  counter: number = 0;
  step: number = 5;
  // adding(){
  //   this.counter += 1;
  // }
  // minus() {
  //   this.counter -= 1;
  // }

  changeCounter(param: number){
    this.counter += param;

  }


}
