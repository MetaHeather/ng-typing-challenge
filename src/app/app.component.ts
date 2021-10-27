import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomSentence = lorem.sentence();
  input ='';
  win = false;

  onInput(value: string): void {
    this.input = value;

    if(this.input === this.randomSentence) {
      this.win = true;
    }
    
  }

}
